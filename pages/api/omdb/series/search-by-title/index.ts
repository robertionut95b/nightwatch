import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { OMDBApiUtils } from '../../../../../src/utils/convertors/OMDBApiUtils';
import { OMDBSearchSeries } from '../../../../../src/utils/convertors/OMDBSearchSeries';

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

  const title = req.query.t as string;

  const series: OMDBSearchSeries[] =
    await OMDBApiUtils.fetchOMDBSeriesBySearchTitle(title);

  if (series.length === 0) {
    return res.status(404).json({
      status: 'error',
      message: 'Not Found',
    });
  }

  if (series.length !== 0) return res.status(200).json(series);

  return res.status(400).json({
    status: 'error',
    message: 'Incorrect syntax',
  });
};

export default handler;
