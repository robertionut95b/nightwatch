import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.error(message));
});

const httpLink = new HttpLink({
  uri: process.env.API_GRAPHQL_URL + '/api/graphql',
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, httpLink]),
});

export default apolloClient;
