import {
  HEROE_RING,
  HEROE_ADD,
  HEROE_REMOVE,
  HEROE_UPDATE,
  HEROE_COUNTER
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

export const increaseCounter = () => {
  return {
    type: HEROE_COUNTER,
    payload: null
  };
};
