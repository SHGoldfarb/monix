import { SET_RATE_1, SET_RATE_2 } from './constants';

const ratesReducer = (state, action) => {
  switch (action.type) {
    case SET_RATE_1:
      return {
        ...state,
        rate1: action.rate
      };
    case SET_RATE_2:
      return {
        ...state,
        rate2: action.rate
      };
    default:
      return state
  }
};

export default ratesReducer;