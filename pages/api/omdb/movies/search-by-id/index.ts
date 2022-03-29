import { NextApiRequest, NextApiResponse } from 'next';
import { OMDBApiUtils } from '../../../../../src/utils/convertors/OMDBApiUtils';
import { getSession } from 'next-auth/client';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: 'Method Not Allowed',
    });
  }

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  const id = req.query.i as string;

  const movie = await OMDBApiUtils.fetchOMDBMovieByID(id);

  if (!movie) {
    return res.status(404).json({
      status: 'error',
      message: 'Not Found',
    });
  }

  if (movie) return res.status(200).json(movie);

  return res.status(400).json({
    status: 'error',
    message: 'Incorrect syntax',
  });
};

export default handler;
