import * as types from '../actionTypes';

export const selectValue = (id, select) => {
  const type = select === 'maker' ? types.SEARCH_SELECT_MAKER : types.SEARCH_SELECT_MODEL;
  return { type, selected: id };
};

export const clearSelects = () => ({ type: types.SEARCH_CLEAR_SELECTS });
