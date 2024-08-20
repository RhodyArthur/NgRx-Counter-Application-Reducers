import { createSelector, createFeatureSelector } from "@ngrx/store";

export const selectCounterState = createFeatureSelector<number>('counter');


export const selectCounter = createSelector(
    selectCounterState,
    (state:number) => state)