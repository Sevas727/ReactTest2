import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function getItems() {
    return fetch('http://api.itboost.org:88/app_dev.php/api/events')
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
                if (!response.ok) {

        return Promise.reject(json);
    }
    return json;

})
.then(
    response => response,
    error => error
);
}

export function loadItems() {
  return function(dispatch) {
      return getItems().then(response => {
      dispatch(loadItemsSuccess(response.response.items));
        }).catch(error => {
      throw(error);
    });
  };
}
