import { buildSchema } from 'type-graphql';
import { applyResolversEnhanceMap, resolvers } from '../generated/type-graphql';
import { resolversEnhanceMap } from './auth-gql';
import { userAuthChecker } from './auth-check';

applyResolversEnhanceMap(resolversEnhanceMap);

const schema = await buildSchema({
  authChecker: userAuthChecker,
  validate: true,
  resolvers: resolvers,
  emitSchemaFile: true,
});

export default schema;
