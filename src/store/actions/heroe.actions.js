import {
  HEROE_ADD,
  HEROE_COUNTER,
  HEROE_EDIT,
  HEROE_REMOVE,
  HEROE_RING,
  HEROE_FILTER,
  HEROE_UPDATE
} from '../actionTypes';

export const ringHeroe = heroes => {
  return {
    type: HEROE_RING,
    payload: heroes
  };
};

export const addHeroe = heroes => {
  return {
    type: HEROE_ADD,
    payload: heroes
  };
};

export const removeHeroe = heroes => {
  return {
    type: HEROE_REMOVE,
    payload: heroes
  };
};

export const updateHeroe = heroes => {
  return {
    type: HEROE_UPDATE,
    payload: heroes
  };
};

export const editHeroe = heroes => {
  return {
    type: HEROE_EDIT,
    payload: heroes
  };
};

export const increaseCounter = () => {
  return {
    type: HEROE_COUNTER,
    payload: null
  };
};

export const filterHeroe = filter => {
  return {
    type: HEROE_FILTER,
    payload: filter
  };
};
