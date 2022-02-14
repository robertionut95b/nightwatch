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
  emitSchemaFile: true,
});

export default applyMiddleware(schema, permissions);
