import { SET_RATE_1, SET_RATE_2, SET_MULTIPLIER } from './constants';

export const setRate1 = rate1 => ({
  type: SET_RATE_1,
  rate: rate1,
});

export const setRate2 = rate2 => ({
  type: SET_RATE_2,
  rate: rate2,
});

export const setMultiplier = multiplier => ({
  type: SET_MULTIPLIER,
  multiplier,
});
