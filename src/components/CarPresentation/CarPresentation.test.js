import React from 'react';
import ReactDOM from 'react-dom';
import CarPresentation from './CarPresentation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CarPresentation />, div);
});