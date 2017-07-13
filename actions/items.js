import * as types from './types';
import Api from '../lib/api';
import globalConstants from '../constants';

export function fetchItems() {
  return (dispatch, getState) => {
    return Api.get(globalConstants.events).then(resp => {
      dispatch(setFetchedItems(resp.events));
   }).catch( (ex) => {
     console.log(ex);
   });
 }
}

export function setFetchedItems(items) {
  return {
    type: types.SET_ITEMS,
    items
  }
}
