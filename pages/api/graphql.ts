import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import schema from '../../graphql/schema';
import prisma from '../../lib/PrismaClient/prisma';

const cors = Cors();

const apolloServer = new ApolloServer({
  schema: schema,
  context: () => ({ prisma: prisma }),
});

const startServer = apolloServer.start();

startServer.catch(err => console.error(err));

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