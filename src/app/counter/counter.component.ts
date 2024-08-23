import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, setCount, incrementBy, undoLastAction} from '../state/counter.actions';
import { CommonModule } from '@angular/common';
import {  selectCounterState } from '../state/counter.selectors';
import { FormsModule } from '@angular/forms';
import { CombinedState } from '../state/multiple-reducers';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

 count$: Observable<number>;
//  history$: Observable<string[]>;
 inputValue:number = 0;


  constructor(private store: Store<CombinedState>) {
    this.count$ = this.store.select(selectCounterState);
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
    // set counter to 0 when reset button is clicked
    this.inputValue = 0;
  }

  // dispatch a setCount action
  setCount() {
    if(this.inputValue >= 0) {
      this.store.dispatch(reset());
      this.store.dispatch(setCount({count: this.inputValue}));
    }
  }

  // dispatch an incrementBy action
  incrementByValue() {
    this.store.dispatch(incrementBy({value: this.inputValue}));
  }

  undoLastAction() {
    this.store.dispatch(undoLastAction())
  }
}
