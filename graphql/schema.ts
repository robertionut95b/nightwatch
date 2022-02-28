import { buildSchema } from 'type-graphql';
import { applyResolversEnhanceMap, resolvers } from '../generated/type-graphql';
import { resolversEnhanceMap } from './auth-gql';
import { userAuthChecker } from './auth-check';
import permissions from './shield';
import { applyMiddleware } from 'graphql-middleware';

applyResolversEnhanceMap(resolversEnhanceMap);

const schema = await buildSchema({
  authChecker: userAuthChecker,
  validate: true,
  resolvers: resolvers,
  // emit schema only on Dev environments
  emitSchemaFile:
    process.env.TYPEGRAPHQL_GENERATE_CODE ||
    process.env.NODE_ENV === 'development',
});

export default applyMiddleware(schema, permissions);
