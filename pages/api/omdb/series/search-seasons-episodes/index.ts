import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { OMDBApiUtils } from '../../../../../src/utils/convertors/OMDBApiUtils';

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

  const s = req.query.s as string;
  const seas = req.query.seas as string;

  const season = await OMDBApiUtils.fetchSeriesEpisodeBySeriesTitleAndSeason(
    s,
    parseInt(seas),
  );

  if (!season) {
    return res.status(404).json({
      status: 'error',
      message: 'Not Found',
    });
  }

  if (season) return res.status(200).json(season);

  return res.status(400).json({
    status: 'error',
    message: 'Incorrect syntax',
  });
};

export default handler;
