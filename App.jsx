import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient'; // Import Apollo client instance
import MainComponent from './MainComponent'; // main component

function App() {
  return (
    <ApolloProvider client={client}>
      <MainComponent />
    </ApolloProvider>
  );
}

export default App;
