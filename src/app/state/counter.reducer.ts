import { createReducer, on } from "@ngrx/store";
import { decrement, increment, incrementBy, reset, setCount } from "./counter.actions";

// defining the state shape
export interface CounterState {
    counter: number;
}

// setting the initial state
export const initialState: CounterState = {
    counter: typeof window !== 'undefined' && localStorage.getItem('counter') !== null
        ? +localStorage.getItem('counter')!
        : 0
};
// creating the reducer function
// ensuring mutability
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({...state, counter: state.counter + 1})),
    on(decrement, (state) => ({...state, counter: state.counter - 1})),
    on(reset, (state) => ({...state, counter:0})),
    on(setCount, (state, {count}) => ({...state, counter: count})),
    on(incrementBy, (state, {value}) => ({...state, counter: state.counter + value}))
)