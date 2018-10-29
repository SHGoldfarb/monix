import { createSelector } from 'reselect';

export const rate1Selector = state => state.rate1;
export const rate2Selector = state => state.rate2;

export const rate2NameSelector = createSelector(rate2Selector, rate => rate.name);
export const rate1NameSelector = createSelector(rate1Selector, rate => rate.name);

export const createRateNameSelector = rateNumber => (state) => {
  switch (rateNumber) {
    case 1:
      return rate1NameSelector(state);
    case 2:
      return rate2NameSelector(state);
    default:
      return 'Rate not found';
  }
};

export const multiplier1Selector = state => state.multiplier;
export const multiplier2Selector = state => state.multiplier * state.rate2.rate / state.rate1.rate;

export const createMultiplierSelector = rateNumber => (state) => {
  switch (rateNumber) {
    case 1:
      return multiplier1Selector(state);
    case 2:
      return multiplier2Selector(state);
    default:
      return null;
  }
};
