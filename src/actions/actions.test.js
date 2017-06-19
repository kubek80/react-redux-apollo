import * as actions from './index';
import * as types from '../actionTypes';

describe('actions', () => {
  it('should create an action search select maker', () => {
    const selected = 10;
    const expectedAction = {
      type: types.SEARCH_SELECT_MAKER,
      selected,
    };
    expect(actions.selectValue(10, 'maker')).toEqual(expectedAction);
  });

  it('should create an action search select model', () => {
    const selected = 10;
    const expectedAction = {
      type: types.SEARCH_SELECT_MODEL,
      selected,
    };
    expect(actions.selectValue(10, 'model')).toEqual(expectedAction);
  });
  
  it('should create an action clear selects', () => {
    const expectedAction = { type: types.SEARCH_CLEAR_SELECTS };
    expect(actions.clearSelects()).toEqual(expectedAction);
  });
})
