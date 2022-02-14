import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method Not Allowed',
    });
  }

  const email = req.body.email;
};

export default handler;
