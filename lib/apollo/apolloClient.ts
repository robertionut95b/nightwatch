import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { sha256 } from 'crypto-hash';

const linkChain = createPersistedQueryLink({ sha256 }).concat(
  new HttpLink({ uri: process.env.API_GRAPHQL_URL }),
);

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: linkChain,
});

export default apolloClient;
