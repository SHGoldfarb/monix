import {
  SET_RATE_1, SET_RATE_2, SET_MULTIPLIER, UP_MULTIPLIER,
  DOWN_MULTIPLIER, SET_RATES, SET_RATE_1_BY_NAME, SET_RATE_2_BY_NAME,
} from './constants';

export const setRate1 = rate1 => ({
  type: SET_RATE_1,
  rate: rate1,
});

export const setRate2 = rate2 => ({
  type: SET_RATE_2,
  rate: rate2,
});

export const setRate1ByName = name => ({
  type: SET_RATE_1_BY_NAME,
  name,
});

export const setRate2ByName = name => ({
  type: SET_RATE_2_BY_NAME,
  name,
});

export const setMultiplier = multiplier => ({
  type: SET_MULTIPLIER,
  multiplier,
});

export const upMultiplier = () => ({
  type: UP_MULTIPLIER,
});

export const downMultiplier = () => ({
  type: DOWN_MULTIPLIER,
});

export const fetchRates = async () => {
  const response = await fetch('https://api.exchangeratesapi.io/latest');
  const { rates } = await response.json();
  return {
    type: SET_RATES,
    rates,
  };
};
