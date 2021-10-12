import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../graphql/schema'
import { createContext } from '../../graphql/context'
import Cors from 'micro-cors'

const cors = Cors()

const apolloServer = new ApolloServer({ schema, context: createContext })

const startServer = apolloServer.start()

const API_GRAPHQL_URL = process.env.API_GRAPHQL_URL || "api/graphql"

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: `/${API_GRAPHQL_URL}`
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}