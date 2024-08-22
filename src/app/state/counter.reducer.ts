import { createReducer, on } from "@ngrx/store";
import { decrement, increment, incrementBy, reset, setCount, undoLastAction } from "./counter.actions";

// defining the state shape
export interface CounterState {
    counter: number;
}

// setting the initial state
export const initialCounterState: CounterState = {
    counter: typeof window !== 'undefined' && localStorage.getItem('counter') !== null
        ? +localStorage.getItem('counter')!
        : 0
    // counter: 0
};


// creating the reducer function
// ensuring mutability
export const counterReducer = createReducer(
    initialCounterState,
    on(increment, (state) => ({...state, counter: state.counter + 1})),

    // cannot decrement below zero
    on(decrement, state => ({ ...state, counter: Math.max(0, state.counter - 1) })),
    on(reset, (state) => ({...state, counter:0})),

    // complex state update with immutability
    on(setCount, (state, {count}) => ({...state, counter: count})),
    on(incrementBy, (state, {value}) => ({...state, counter: state.counter + value})),

    // on(undoLastAction, state => {
    //     const lastCount = state.counterHistory[state.counterHistory.length - 2] || 0;
    //     return { ...state, count: lastCount };
    //   })
)