import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, switchMap } from 'rxjs/operators';
import { increment, decrement, reset, setCount } from './counter.actions';
import { selectCounter } from './counter.selectors';

@Injectable()
export class CounterEffects {

  saveCountToLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment, decrement, reset, setCount),
      switchMap(() => this.store.select(selectCounter)),
      tap(count => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('counter', count.toString());
        }
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store
  ) {}
}