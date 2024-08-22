import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset, undoLastAction } from "./counter.actions";

export interface CounterHistoryState {
    history: string[];
  }
  
  export const initialHistoryState: CounterHistoryState = {
    history: []
  };
  
  export const counterHistoryReducer = createReducer(
    initialHistoryState,
    on(increment, (state) => ({ ...state, history: [...state.history, 'increment'] })),
    on(decrement, (state) => ({ ...state, history: [...state.history, 'decrement'] })),
    on(reset, state => ({ ...state, history: [] })),
    on(undoLastAction, state => ({ ...state, history: state.history.slice(0, -1) }))
  );
  