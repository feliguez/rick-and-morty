import {
  HEROE_RING,
  HEROE_ADD,
  HEROE_REMOVE,
  HEROE_UPDATE,
  HEROE_COUNTER
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
          const isCurrentTodo = heroe.id === action.payload.id;
          // si es el elemento que requerimos, cambiamos el estado
          return isCurrentTodo ? { ...heroe, useRing: true } : heroe;
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
