import {
  CHARACTER_GET_ERROR,
  CHARACTER_GET_SUCCESS,
  CHARACTER_GET_START
} from '../actionTypes';

import { getService } from '../../services/character.services';

const startActionCreator = () => ({
  type: CHARACTER_GET_START,
  payload: null
});

const successActionCreator = data => ({
  type: CHARACTER_GET_SUCCESS,
  payload: data
});

const errorActionCreator = errorMessage => ({
  type: CHARACTER_GET_ERROR,
  payload: errorMessage
});

export const characterGetAsyncActionCreator = id => {
  return dispatch => {
    dispatch(startActionCreator());
    getService(id)
      .then(data => {
        debugger;
        dispatch(successActionCreator(data));
      })
      .catch(err => {
        dispatch(errorActionCreator(err));
      });
  };
};
