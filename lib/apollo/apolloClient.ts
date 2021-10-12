import { ApolloClient, InMemoryCache } from '@apollo/client'

const API_URL = process.env.API_URL || "localhost"
const API_PORT = process.env.API_PORT || 3000
const API_GRAPHQL_URL = process.env.API_GRAPHQL_URL || "api/graphql"
const USE_SSL = process.env.USE_SSL || false

const apolloClient = new ApolloClient({
    uri: `${USE_SSL ? "https" : "http"}://${API_URL}:${API_PORT}/${API_GRAPHQL_URL}`,
    cache: new InMemoryCache(),
})

export default apolloClient