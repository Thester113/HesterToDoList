import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-locations-sub.herokuapp.com',
  cache: new InMemoryCache(),
});

export default client;