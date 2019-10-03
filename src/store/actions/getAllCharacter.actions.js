import {
  CHARACTER_GET_ALL_ERROR,
  CHARACTER_GET_ALL_START,
  CHARACTER_GET_ALL_SUCCESS
} from '../actionTypes';

import { getAllService } from '../../services/character.services';

const characterGetAllStartActionCreator = () => {
  return {
    type: CHARACTER_GET_ALL_START,
    payload: null
  };
};

const characterGetAllSuccessActionCreator = data => {
  return {
    type: CHARACTER_GET_ALL_SUCCESS,
    payload: data
  };
};

/**
 *
 * @param {string} message
 */
const characterGetAllErrorActionCreator = message => {
  return {
    type: CHARACTER_GET_ALL_ERROR,
    payload: message
  };
};

export const characterGellAllAsyncActionCreator = () => {
  return dispatch => {
    dispatch(characterGetAllStartActionCreator());
    getAllService()
      .then(data => {
        dispatch(characterGetAllSuccessActionCreator(data));
      })
      .catch(err => {
        debugger;
        dispatch(characterGetAllErrorActionCreator(err));
      });
  };
};
