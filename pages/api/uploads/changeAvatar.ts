import type { NextApiRequest, NextApiResponse } from 'next';
import { mkdir, unlink, writeFile } from 'fs/promises';
import { join } from 'path';
import prisma from '../../../lib/PrismaClient/prisma';

const UPLOAD_PATH = './public/users/uploads';

const makeid = () => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

interface ImageResponse {
  type?: string;
  data?: Buffer;
}

const decodeBase64Image = (dataString: string) => {
  const matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
  const response: ImageResponse = {};

  if (matches?.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = Buffer.from(matches[2], 'base64');

  return response;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (req.method === 'POST') {
    const file = req.body.image;
    const userId = req.body.user;

    // delete the previous image if it exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (user?.image) {
      const path = join('public', user.image);
      await unlink(path);
      await prisma.user.update({
        data: {
          image: {
            set: null,
          },
        },
        where: { id: userId },
      });
    }

    try {
      // create folders path
      await mkdir(join(process.env.APP_FILE_UPLOAD_PATH || UPLOAD_PATH), {
        recursive: true,
      });
      // get file extension
      const [, type] = file.split(';')[0].split('/');
      // remove header
      const base64Image = decodeBase64Image(file);
      const filePath = join(
        process.env.APP_FILE_UPLOAD_PATH || UPLOAD_PATH,
        makeid() + '.' + type,
      );
      // create image file in the path
      if ('data' in base64Image) {
        await writeFile(
          `${filePath}`,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          base64Image.data,
        );
        await prisma.user.update({
          data: {
            image: {
              set:
                '/' +
                filePath.toString().split('public\\')[1].replaceAll('\\', '/'),
            },
          },
          where: { id: userId },
        });
        return res.status(200).json({
          status: 'success',
          message: 'File uploaded successfully',
          imagePath:
            '/' +
            filePath.toString().split('public\\')[1].replaceAll('\\', '/'),
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: 'error',
        message: 'Error while uploading file',
      });
    }
  } else {
    return res.status(405).json({
      message: 'Method Not Allowed',
    });
  }
};

export default handler;
