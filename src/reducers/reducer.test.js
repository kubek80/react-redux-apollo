import reducer from './index';
import * as types from '../actionTypes';

/* global describe, it, expect */
describe('selectors reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle SEARCH_SELECT_MAKER', () => {
    expect(reducer([], { type: types.SEARCH_SELECT_MAKER, selected: '10' })).toEqual(
      { maker: '10', model: null },
    );
  });

  it('should handle SEARCH_SELECT_MODEL', () => {
    expect(reducer([], { type: types.SEARCH_SELECT_MODEL, selected: '20' })).toEqual(
      { model: '20' },
    );
  });

  it('should handle re-selection on maker', () => {
    expect(reducer({ maker: '10' }, { type: types.SEARCH_SELECT_MODEL, selected: '20' })).toEqual(
      { maker: '10', model: '20' },
    );
    expect(reducer({ maker: '10', model: '20' }, { type: types.SEARCH_SELECT_MAKER, selected: '20' })).toEqual(
      { maker: '20', model: null },
    );
  });

  it('should handle SEARCH_CLEAR_SELECTS', () => {
    expect(reducer({ maker: '10', model: '20' }, { type: types.SEARCH_CLEAR_SELECTS, selected: '20' })).toEqual(
      { model: null, maker: null },
    );
  });
});
