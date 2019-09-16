import {
  HEROE_RING,
  HEROE_ADD,
  HEROE_REMOVE,
  HEROE_UPDATE,
  HEROE_COUNTER
} from '../actionTypes';

const initialState = {
  isRingUsed: false,
  counter: 1,
  heroes: []
};

const heroeReducers = (state = initialState, action) => {
  switch (action.type) {
    case HEROE_RING:
      return {
        ...state,
        isRingUsed: true
      };
    case HEROE_ADD:
      return {
        ...state,
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
