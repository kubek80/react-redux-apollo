import React, { Component } from 'react';
import { Route } from 'react-router';
import { Navigation } from './components';
import { Home, Search, CarDetails } from './containers';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/result/:makerId/:modelId" component={CarDetails} />
      </div>
    );
  }
}
