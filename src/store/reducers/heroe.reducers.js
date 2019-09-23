import {
  HEROE_RING,
  HEROE_ADD,
  HEROE_REMOVE,
  HEROE_UPDATE,
  HEROE_COUNTER,
  HEROE_EDIT
} from '../actionTypes';

import { heroes } from '../../services/heroe.services';

const initialState = {
  isRingUsed: false,
  counter: heroes.length + 1,
  heroes: heroes
};

const heroeReducers = (state = initialState, action) => {
  switch (action.type) {
    case HEROE_RING:
      return {
        ...state,
        isRingUsed: !state.isRingUsed,
        heroes: state.heroes.map(heroe => {
          const isCurrentHeroe = heroe.id === action.payload.id;
          // si es el elemento que requerimos, cambiamos el estado
          return isCurrentHeroe ? { ...heroe, useRing: true } : heroe;
        })
      };
    case HEROE_ADD:
      return {
        ...state,
        counter: state.counter + 1,
        heroes: state.heroes.concat([action.payload])
      };
    case HEROE_REMOVE:
      return {
        ...state,
        heroes: state.heroes.filter(heroe => heroe.id !== action.payload.id)
      };
    case HEROE_UPDATE:
      return {
        ...state,
        heroes: state.heroes.map(heroe => {
          const isCurrentHeroe = heroe.id === action.payload.id;
          return isCurrentHeroe ? { ...action.payload, editing: false } : heroe;
        })
      };

    case HEROE_EDIT:
      return {
        ...state,
        heroes: state.heroes.map(heroe => {
          const isCurrentHeroe = heroe.id === action.payload.id;
          return isCurrentHeroe ? { ...heroe, editing: true } : heroe;
        })
      };
    case HEROE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};

export default heroeReducers;
