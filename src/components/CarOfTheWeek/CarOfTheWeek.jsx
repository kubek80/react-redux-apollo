import React from 'react';
import PropTypes from 'prop-types';

const CarOfTheWeek = props => (
  <main>
    <h1>Car of the week</h1>
    <p>{props.description}</p>
  </main>
);

CarOfTheWeek.propTypes = {
  description: PropTypes.string.isRequired,
};

export default CarOfTheWeek;
