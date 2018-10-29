import {
  SET_RATE_1, SET_RATE_2, SET_MULTIPLIER, UP_MULTIPLIER, DOWN_MULTIPLIER,
  SET_RATES, SET_RATE_1_BY_NAME, SET_RATE_2_BY_NAME,
} from './constants';

const N1 = 'USD';
const N2 = 'MXN';

const ratesReducer = (state, action) => {
  let rate1;
  let rate2;
  switch (action.type) {
    case SET_RATES:
      rate1 = {
        name: N1,
        rate: action.rates[N1],
      };
      rate2 = {
        name: N2,
        rate: action.rates[N2],
      };
      return {
        ...state,
        rates: action.rates,
        rate1,
        rate2,
      };
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
    case SET_RATE_1_BY_NAME:
      return {
        ...state,
        rate1: {
          name: action.name,
          rate: state.rates[action.name],
        },
      };
    case SET_RATE_2_BY_NAME:
      return {
        ...state,
        rate2: {
          name: action.name,
          rate: state.rates[action.name],
        },
      };
    case SET_MULTIPLIER:
      return {
        ...state,
        multiplier: action.multiplier,
      };
    case UP_MULTIPLIER:
      return {
        ...state,
        multiplier: state.multiplier * 10,
      };
    case DOWN_MULTIPLIER:
      return {
        ...state,
        multiplier: state.multiplier / 10,
      };
    default:
      return state;
  }
};

export default ratesReducer;
