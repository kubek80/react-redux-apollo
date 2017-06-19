import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { gql, graphql } from 'react-apollo';
import get from 'lodash.get';
import find from 'lodash.find';
import { selectValue, clearSelects } from '../../actions';
import { Button, Select } from '../../components';

class Search extends Component {
  componentWillUnmount() {
    this.props.dispatch(clearSelects());
  }

  render() {
    const { dispatch, selectors, makers } = this.props;

    const getList = id => get(find(makers, el => el.id === +id, {}), 'models');
    const getUrl = () => `/${selectors.maker}/${selectors.model}`;

    return (
      <main>
        <h1>Search module</h1>
        <Select
          id="makers"
          name="Select maker"
          options={makers}
          onChange={id => dispatch(selectValue(id, 'maker'))}
        />
        <Select
          id="models"
          name="Select model"
          options={getList(selectors.maker)}
          onChange={id => dispatch(selectValue(id, 'model'))}
        />
        <Button disabled={!selectors.model} onClickHandler={() => dispatch(push(getUrl()))} />
      </main>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectors: PropTypes.shape({
    maker: PropTypes.string,
    model: PropTypes.string,
  }).isRequired,
  makers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    models: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  })),
};

Search.defaultProps = {
  makers: [],
};

const mapStateToProps = state => ({ selectors: state.selectors });
const connectedSearch = connect(mapStateToProps)(Search);

const makersQuery = gql`
  query makers {
    makers {
      id
      name
      models {
        id
        name
      }
    }
  }
 `;

export default graphql(makersQuery, {
  props: ({ data: { loading, makers, error } }) => ({ loading, error, makers }),
})(connectedSearch);
