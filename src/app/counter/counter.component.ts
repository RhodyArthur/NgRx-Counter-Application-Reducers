import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../state/counter.actions';
import { CommonModule } from '@angular/common';
import { selectCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

 count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCounter);
  }

  // dispatch an increment action
  increment() {
    this.store.dispatch(increment())
  }

  // dispatch a decrement action
  decrement() {
    this.store.dispatch(decrement())
  }

  // dispatch a reset action
  reset() {
    this.store.dispatch(reset())
  }
}
