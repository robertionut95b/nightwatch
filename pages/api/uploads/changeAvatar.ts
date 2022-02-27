import type { NextApiRequest, NextApiResponse } from 'next';
import { mkdir, unlink, writeFile } from 'fs/promises';
import { join } from 'path';
import prisma from '../../../lib/PrismaClient/prisma';
import { nanoid } from 'nanoid';
import sharp from 'sharp';

const UPLOAD_PATH = './public/users/uploads';
interface ImageResponse {
  type?: string;
  data?: Buffer;
}

const resizeImage = (imageData: Buffer): Promise<Buffer> => {
  return sharp(imageData).resize(100).toBuffer();
};

const decodeBase64Image = (dataString: string): ImageResponse | Error => {
  const matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
  const response: ImageResponse = {};

  if (matches?.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = Buffer.from(matches[2], 'base64');

  return response;
};

const toImageUpload = async (
  file: string,
): Promise<{ base64Image: Error | ImageResponse; filePath: string }> => {
  // create folders path
  await mkdir(join(process.env.APP_FILE_UPLOAD_PATH || UPLOAD_PATH), {
    recursive: true,
  });
  // get file extension
  const [, type] = file.split(';')[0].split('/');
  // remove header
  const base64Image = decodeBase64Image(file);
  // create filePath
  const filePath = join(
    process.env.APP_FILE_UPLOAD_PATH || UPLOAD_PATH,
    nanoid() + '.' + type,
  );

  return {
    base64Image,
    filePath,
  };
};

const writeImageToFs = (
  base64Image: Buffer,
  filePath: string,
): Promise<void> => {
  return writeFile(filePath, base64Image);
};

const removePreviousAvatarAndUpdateUser = async (
  userId: string,
  filePath: string,
): Promise<void> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  const imageUrl = user?.image;

  if (imageUrl) {
    const path = join('public', imageUrl);
    // update to new file path
    await prisma.user.update({
      data: {
        image: {
          set: filePath,
        },
      },
      where: { id: userId },
    });

    // remove previous file by path
    await unlink(path);
    console.log(`Removed previous avatar for user ${userId}`);

    return;
  }

  // otherwise simply update the user with the new file path
  await prisma.user.update({
    data: {
      image: {
        set: filePath,
      },
    },
    where: { id: userId },
  });
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method Not Allowed',
    });
  }
  const file = req.body.image;
  const userId = req.body.user;

  console.log(`${userId} is uploading a new avatar`);
  try {
    const { base64Image, filePath } = await toImageUpload(file);
    if ('data' in base64Image && base64Image.data) {
      // create a valid url path for nextjs ui
      const dbPath =
        '/' + filePath.toString().split('public\\')[1].replaceAll('\\', '/');

      // resize image to 100x100px
      const resizedImage = await resizeImage(base64Image.data);

      // create image file in the path
      await writeImageToFs(resizedImage, filePath);

      // update user record with path
      removePreviousAvatarAndUpdateUser(userId, dbPath);
      console.log(`${userId} uploaded a new avatar`);

      return res.status(200).json({
        status: 'success',
        message: 'File uploaded successfully',
        imagePath: dbPath,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 'error',
      message: 'Error while uploading file',
    });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
};

export default handler;
