import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.API_GRAPHQL_URL,
});

export default apolloClient;
