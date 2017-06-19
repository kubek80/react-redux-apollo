import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import App from './App';

/* global it, document */
it('renders without crashing', () => {
  const div = document.createElement('div');
  const client = new ApolloClient();
  ReactDOM.render(
    <ApolloProvider client={client}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </ApolloProvider>, div);
});
