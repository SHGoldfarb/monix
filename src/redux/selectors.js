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
