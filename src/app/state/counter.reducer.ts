import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset, setCount } from "./counter.actions";

export const initialState = () => {
    if (typeof window !== 'undefined' && localStorage.getItem('counter') !== null) {
        return +localStorage.getItem('counter')!;
    }
    return 0;
};
export const counterReducer = createReducer(
    initialState(),
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, () => 0),
    on(setCount, (_, {count}) => count)
)