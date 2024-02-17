import React from 'react';
import { ApolloProvider, client } from '@apollo/client';
import { Main } from '/main.jsx'; // Import your main component

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;