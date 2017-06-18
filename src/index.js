import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import selectors from './reducers';

import App from './App';
import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Connect to apollo client
// const networkInterface = createNetworkInterface({ uri: 'http://localhost:3500/graphql' });
const client = new ApolloClient();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
/* eslint-disable no-underscore-dangle */
/* global window */
const store = createStore(
  combineReducers({
    selectors,
    router: routerReducer,
    apollo: client.reducer(),
  }),
  {},
  compose(
    applyMiddleware(middleware),
    applyMiddleware(client.middleware()),
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ApolloProvider>,
  /* eslint-disable */
  /* global document */
  document.getElementById('root')
  /* eslint-enable */
);
