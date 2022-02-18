import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const API_GRAPHQL_URL =
  process.env.API_GRAPHQL_URL || 'http://localhost:3000/api/graphql';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.error(message));
});

const httpLink = new HttpLink({
  uri: API_GRAPHQL_URL,
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, httpLink]),
});

export default apolloClient;
