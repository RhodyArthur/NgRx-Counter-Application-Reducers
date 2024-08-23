import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CombinedState } from "./multiple-reducers";

// export const selectCounterState = createFeatureSelector<number>('counter');
export const selectCounterState = (state: CombinedState) => state.counter.counter;
export const selectCounterHistory = (state: CombinedState) => state.counter.history;


// export const selectCounter = createSelector(
//     selectCounterState,
//     (state:number) => state)