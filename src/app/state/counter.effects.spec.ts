// import { TestBed } from '@angular/core/testing';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { of } from 'rxjs'
// import { CounterEffects } from './counter.effects';
// import { increment, decrement, reset, setCount } from './counter.actions';
// import { selectCounter } from './counter.selectors';

// describe('CounterEffects', () => {
//   let effects: CounterEffects;
//   let store: MockStore<any>;
//   let selectCounterMock: jest.Mock;

//   beforeEach(() => {
//     selectCounterMock = jest.fn();
//     TestBed.configureTestingModule({
//       providers: [
//         CounterEffects,
//         provideMockStore({ initialState: { counter: 0 } }),
//         { provide: selectCounter, useValue: selectCounterMock}
//       ],
//     });

//     effects = TestBed.inject(CounterEffects);
//     store = TestBed.inject(MockStore);
//   });

//   it('should save the incremented count to local storage', () => {
//     const spy = jest.spyOn(localStorage, 'setItem');
//     store.dispatch(increment());

//     effects.saveCountToLocalStorage$.subscribe();

//     expect(spy).toHaveBeenCalledWith('counter', '1');
//   });

//   it('should save the decremented count to local storage', () => {
//     const spy = jest.spyOn(localStorage, 'setItem');
//     store.dispatch(decrement());

//     effects.saveCountToLocalStorage$.subscribe();

//     expect(spy).toHaveBeenCalledWith('counter', '-1');
//   });

//   it('should save the reset count (0) to local storage', () => {
//     const spy = jest.spyOn(localStorage, 'setItem');
//     store.dispatch(reset());

//     effects.saveCountToLocalStorage$.subscribe();

//     expect(spy).toHaveBeenCalledWith('counter', '0');
//   });

//   it('should save the set count to local storage', () => {
//     const spy = jest.spyOn(localStorage, 'setItem');
//     const count = 7;
//     store.dispatch(setCount({ count }));

//     effects.saveCountToLocalStorage$.subscribe();

//     expect(spy).toHaveBeenCalledWith('counter', count.toString());
//   });

//   it('should not dispatch any actions', () => {
//     const spy = jest.spyOn(store, 'dispatch');
//     store.dispatch(increment());

//     effects.saveCountToLocalStorage$.subscribe();

//     expect(spy).not.toHaveBeenCalled();
//   });
// });