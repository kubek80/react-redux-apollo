import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';

/* global it, document */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Select id="name" name="Select" onChange={() => {}} />, div);
});
