import { buildSchema } from 'type-graphql';
import { resolvers } from '../generated/type-graphql';
import permissions from './shield';
import { applyMiddleware } from 'graphql-middleware';

const schema = await buildSchema({
  authChecker: () => true,
  resolvers: resolvers,
  // emit schema only on Dev environments
  emitSchemaFile:
    process.env.TYPEGRAPHQL_GENERATE_CODE ||
    process.env.NODE_ENV === 'development',
});

export default applyMiddleware(schema, permissions);
