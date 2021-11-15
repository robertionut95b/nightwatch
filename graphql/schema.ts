import { buildSchema } from 'type-graphql';
import { resolvers } from '../generated/type-graphql';

const schema = await buildSchema({
    resolvers: resolvers,
    validate: false,
    emitSchemaFile: true,
})

export default schema;