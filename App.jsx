import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient'; // Import your Apollo client instance
import MainComponent from './MainComponent'; // Your main component

function App() {
  return (
    <ApolloProvider client={client}>
      <MainComponent />
    </ApolloProvider>
  );
}

export default App;
