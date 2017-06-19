import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import get from 'lodash.get';
import { CarPresentation } from '../../components';

const CarDetails = props => (
  <CarPresentation
    loading={props.loading}
    maker={get(props.model, 'maker.name')}
    model={get(props.model, 'name')}
    price={get(props.model, 'price')}
    image={get(props.model, 'imageUrl')}
  />
);

CarDetails.propTypes = {
  loading: PropTypes.bool.isRequired,
  model: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    maker: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

CarDetails.defaultProps = {
  model: { maker: {} },
};

const modelQuery = gql`
  query model($modelId: Int!) {
    model(id: $modelId) {
      name
      price
      imageUrl
      maker {
        name
      }
    }
  }
`;

export default graphql(modelQuery, {
  options: ownProps => ({ variables: { modelId: ownProps.match.params.modelId } }),
  props: ({ data: { loading, model, error } }) => ({ loading, error, model }),
})(CarDetails);
