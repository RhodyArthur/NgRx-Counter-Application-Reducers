import { increment, decrement, reset, setCount } from "./counter.actions";
import { counterReducer, initialState } from "./counter.reducer";

describe('counter reducer', () => {
    it('should return the initial state', () => {
        const result = counterReducer(undefined, {type: 'unknown'});
        expect(result).toEqual(initialState());
    })

    it('should increment the state', () => {
        const result = counterReducer(0, increment());
        expect(result).toEqual(1)
    })

    it('should decrement the state', () => {
        const result = counterReducer(3, decrement());
        expect(result).toEqual(2)
    })

    it('should reset the state to 0', () => {
        const result = counterReducer(5, reset());
        expect(result).toEqual(0)
    })

    it('should set the state to the input count', () => {
        const result = counterReducer(5, setCount({count: 7}));
        expect(result).toEqual(7)
    })

    
})