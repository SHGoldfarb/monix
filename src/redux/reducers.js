import { SET_RATE_1, SET_RATE_2, SET_MULTIPLIER } from './constants';

const ratesReducer = (state, action) => {
  switch (action.type) {
    case SET_RATE_1:
      return {
        ...state,
        rate1: action.rate,
      };
    case SET_RATE_2:
      return {
        ...state,
        rate2: action.rate,
      };
    case SET_MULTIPLIER:
      return {
        ...state,
        multiplier: action.multiplier,
      };
    default:
      return state;
  }
};

export default ratesReducer;
