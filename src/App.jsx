import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Navigation, NotFound } from './components';
import { Home, Search, CarDetails } from './containers';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/:makerId/:modelId" component={CarDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
