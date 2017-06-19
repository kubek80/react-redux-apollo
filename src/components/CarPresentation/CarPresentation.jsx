import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import './CarPresentation.css';

const CarPresentation = props => (
  <main>
    <h1>
      {props.loading && 'Loading...'}
      {props.carOfTheWeek && 'Car of the week: '}
      {props.maker} {props.model}
    </h1>
    { props.carOfTheWeek && <h2>Review</h2> }
    { props.carOfTheWeek && (<p>{props.review}</p>) }
    <h2>Price: {numeral(props.price).format('$0,0.00')}</h2>
    <div className="components__car_presentation__image_wrapper">
      <img src={props.image} alt={props.model} />
    </div>
  </main>
);

CarPresentation.propTypes = {
  carOfTheWeek: PropTypes.bool,
  loading: PropTypes.bool,
  maker: PropTypes.string,
  model: PropTypes.string,
  image: PropTypes.string,
  review: PropTypes.string,
  price: PropTypes.number,
};

CarPresentation.defaultProps = {
  carOfTheWeek: false,
  loading: true,
  maker: '',
  model: '',
  image: '',
  review: '',
  price: 0,
};

export default CarPresentation;
