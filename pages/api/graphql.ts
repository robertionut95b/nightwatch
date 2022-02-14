import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import schema from '../../graphql/schema';
import prisma from '../../lib/PrismaClient/prisma';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'http';
import { getSession } from 'next-auth/client';
import { AppSession } from './auth/[...nextauth]';

const cors = Cors();
export interface Context {
  prisma: PrismaClient;
  res?: ServerResponse;
  req?: MicroRequest;
  session?: AppSession | null;
}

const apolloServer = new ApolloServer({
  schema: schema,
  context: async ({ req, res }): Promise<Context> => {
    const session = await getSession({ req });
    return { prisma, session: session as AppSession, res, req };
  },
});

const startServer = apolloServer.start();

startServer.catch((err) => console.error(err));

const API_GRAPHQL_URL = process.env.API_GRAPHQL_URL || 'api/graphql';

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;

  return apolloServer.createHandler({
    path: `/${API_GRAPHQL_URL}`,
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
