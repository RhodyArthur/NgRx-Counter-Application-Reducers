import { combineReducers } from "@ngrx/store";
import { counterReducer, CounterState, initialCounterState } from "./counter.reducer";
import { counterHistoryReducer, CounterHistoryState, initialHistoryState } from "./counterHistory.reducer";

export interface CombinedState {
    counter: CounterState;
    counterHistory: CounterHistoryState;
}


export const initialState: CombinedState = {
    counter: initialCounterState,
    counterHistory: initialHistoryState
};

// combining multiple reducers
export const combinedReducer = combineReducers({
    counter: counterReducer,
    counterHistory: counterHistoryReducer
})