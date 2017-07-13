import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
export const fetchedItems = createReducer({}, {
  [types.SET_ITEMS](state, action) {
    let newState = {};
    action.items.forEach( (item) => {
      let id = item.event_id;
      newState[id] = Object.assign({}, item, { id });
    });
    return newState;
  },
});
