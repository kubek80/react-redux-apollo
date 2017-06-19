import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import get from 'lodash.get';
import { CarPresentation } from '../../components';


const Home = props => (
  <CarPresentation
    loading={props.loading}
    maker={get(props, 'car.maker.name')}
    model={get(props, 'car.model.name')}
    price={get(props, 'car.model.price')}
    image={get(props, 'car.model.imageUrl')}
    review={props.car.review}
    carOfTheWeek
  />
);

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  car: PropTypes.shape({
    review: PropTypes.string,
    maker: PropTypes.shape({ name: PropTypes.string }),
    model: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      imageUrl: PropTypes.string,
    }),
  }),
};

Home.defaultProps = {
  car: { maker: {}, model: {} },
};

const carOfTheWeekQuery = gql`
  query carOfTheWeek {
    carOfTheWeek {
      review
      maker {
        name
      }
      model {
        name
        price
        imageUrl
      }
    }
  }
 `;

export default graphql(carOfTheWeekQuery, {
  props: ({ data: { loading, carOfTheWeek, error } }) => ({
    loading,
    error,
    car: carOfTheWeek,
  }),
})(Home);
