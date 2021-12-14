import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const API_URL = process.env.API_URL || 'localhost';
const API_PORT = process.env.API_PORT || 3000;
const API_GRAPHQL_URL = process.env.API_GRAPHQL_URL || 'api/graphql';
const USE_SSL = process.env.USE_SSL || false;

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.error(message));
});

const httpLink = new HttpLink({
  uri: `${USE_SSL === null || USE_SSL === undefined || USE_SSL === false ? 'https' : 'http'}://${API_URL}:${API_PORT}/${API_GRAPHQL_URL}`,
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, httpLink]),
  // uri: `${USE_SSL === null || USE_SSL === undefined || USE_SSL === false ? "https" : "http"}://${API_URL}:${API_PORT}/${API_GRAPHQL_URL}`
});

export default apolloClient;