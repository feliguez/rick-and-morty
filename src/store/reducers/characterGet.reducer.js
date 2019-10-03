import {
  CHARACTER_GET_SUCCESS,
  CHARACTER_GET_START,
  CHARACTER_GET_ERROR
} from '../actionTypes';

const initialState = {
  data: null,
  loading: false,
  error: null,
  succes: null,
  errorMessage: ''
};

const characterGetReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CHARACTER_GET_START:
      return {
        ...prevState,
        loading: true
      };

    case CHARACTER_GET_SUCCESS:
      return {
        ...prevState,
        data: action.payload,
        loading: false,
        error: false,
        success: true
      };

    case CHARACTER_GET_ERROR:
      return {
        ...prevState,
        loading: false,
        error: true,
        success: false,
        errorMessage: action.payload
      };

    default:
      return prevState;
  }
};

export default characterGetReducer;
