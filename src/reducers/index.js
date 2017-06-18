import * as types from '../actionTypes';

const selectors = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH_SELECT_MAKER:
      return Object.assign({}, state, { maker: action.selected, model: null });
    case types.SEARCH_SELECT_MODEL:
      return Object.assign({}, state, { model: action.selected });
    case types.SEARCH_CLEAR_SELECTS:
      return Object.assign({}, state, { maker: null, model: null });
    default:
      return state;
  }
};


export default selectors;
