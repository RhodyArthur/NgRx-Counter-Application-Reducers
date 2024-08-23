import { createReducer, on } from "@ngrx/store";
import { decrement, increment, incrementBy, reset, setCount, undoLastAction } from "./counter.actions";

// defining the state shape
export interface CounterState {
    counter: number;
    history: number[];
}

// setting the initial state
export const initialCounterState: CounterState = {
    counter: typeof window !== 'undefined' && localStorage.getItem('counter') !== null
        ? +localStorage.getItem('counter')!
        : 0,
    history: []
};


// creating the reducer function
// ensuring mutability
export const counterReducer = createReducer(
    initialCounterState,
    on(increment, (state) => ({...state,
         counter: state.counter + 1,
         history: [...state.history, state.counter]
        })),

    // cannot decrement below zero
    on(decrement, (state) => ({ ...state,
         counter: Math.max(0, state.counter - 1),
         history: [...state.history, state.counter] 
        })),

    on(reset, (state) => ({...state, counter:0,
        history: [...state.history, state.counter]
    })),

    // complex state update with immutability
    on(setCount, (state, {count}) => ({...state,
         counter: count, 
         history:[count]})),

    on(incrementBy, (state, {value}) => ({...state,
         counter: state.counter + value,
         history: [...state.history, state.counter]
        })),

    on(undoLastAction, state => {
        const lastCount = state.history[state.history.length - 1] || 0;
        return { ...state, count: lastCount,
            history: state.history
         };
      }),

      on(undoLastAction, state => ({ ...state, history: state.history.slice(0, -1) }))

)