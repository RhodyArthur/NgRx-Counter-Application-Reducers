import { selectCounter, selectCounterState } from "./counter.selectors";

describe('counter selectors', () => {
    it('should select the counter state', () => {
        const state = { counter: 5};
        const result = selectCounterState(state);
        expect(result).toEqual(5)
    })

    it('should select the counter value', () => {
        const state = { counter: 8};
        const result = selectCounter(state);
        expect(result).toEqual(8)
    })
})