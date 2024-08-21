import { increment, decrement, reset, setCount } from './counter.actions';

describe('counter actions', () => {
  it('should create an increment action', () => {
    const action = increment();
    expect(action.type).toEqual('[Counter Component] Increment');
  });

  it('should create a decrement action', () => {
    const action = decrement();
    expect(action.type).toEqual('[Counter Component] Decrement');
  });

  it('should create a reset action', () => {
    const action = reset();
    expect(action.type).toEqual('[Counter Component] Reset');
  });

  it('should create a setCount action with the correct type', () => {
    const action = setCount({ count: 10 });
    expect(action.type).toEqual('[Counter Component] Set Count');
  });
});