import {
  CHARACTER_GET_ALL_START,
  CHARACTER_GET_ALL_SUCCESS,
  CHARACTER_GET_ALL_ERROR
} from '../actionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
  succes: null,
  errorMessage: ''
};

/**
 *
 * @param {*} prevState
 * @param {object} action
 * @param {string} action.type
 * @param {object} action.payload
 */
const characterGetAllReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CHARACTER_GET_ALL_START:
      return {
        ...prevState,
        data: [],
        loading: true
      };
    case CHARACTER_GET_ALL_SUCCESS:
      return {
        ...prevState,
        data: action.payload,
        succes: true,
        error: false,
        loading: false
      };
    case CHARACTER_GET_ALL_ERROR:
      return {
        ...prevState,
        error: true,
        succes: false,
        errorMessage: action.payload,
        loading: false
      };

    default:
      return prevState;
  }
};

export default characterGetAllReducer;
