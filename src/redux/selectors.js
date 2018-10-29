import { createSelector } from 'reselect';

export const rate1Selector = state => state.rate1;
export const rate2Selector = state => state.rate2;

export const rate2NameSelector = createSelector(rate2Selector, rate => rate.name);
export const rate1NameSelector = createSelector(rate1Selector, rate => rate.name);

export const multiplierSelector = state => state.multiplier;
