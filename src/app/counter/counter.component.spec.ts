import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { Store } from '@ngrx/store';
import { selectCounter } from '../state/counter.selectors';
import { increment, decrement, reset, setCount } from '../state/counter.actions';
import { of } from 'rxjs';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: any;

  beforeEach(async () => {
    store = {
      dispatch: jest.fn(),
      select: jest.fn().mockReturnValue(of(0))
    };

    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [{ provide: Store, useValue: store }]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should select the current count from the store', () => {
    expect(store.select).toHaveBeenCalledWith(selectCounter);
  });

  it('should dispatch increment action on increment button click', () => {
    component.increment();
    expect(store.dispatch).toHaveBeenCalledWith(increment());
  });

  it('should dispatch decrement action on decrement button click', () => {
    component.decrement();
    expect(store.dispatch).toHaveBeenCalledWith(decrement());
  });

  it('should dispatch reset action and set inputCount to 0 on reset button click', () => {
    component.reset();
    expect(store.dispatch).toHaveBeenCalledWith(reset());
    expect(component.inputValue).toBe(0);
  });

  it('should dispatch setCount action with the input count value', () => {
    component.inputValue = 5;
    component.setCount();
    expect(store.dispatch).toHaveBeenCalledWith(setCount({ count: 5 }));
  });

  it('should not dispatch setCount action when inputCount is negative', () => {
    component.inputValue = -1;
    component.setCount();
    expect(store.dispatch).not.toHaveBeenCalledWith(setCount({ count: -1 }));
  });
});