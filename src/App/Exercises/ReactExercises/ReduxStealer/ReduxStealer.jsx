import React from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  reset,
  decrementWithEnsure,
} from '../../../Store/counterSlice';

export function ReduxStealer() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="sneaker">
      <div>Aktualnie kliknięto {count}</div>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Odejmij
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Resetuj
      </button>

      <button
        onClick={() => {
          dispatch(decrementWithEnsure(5));
        }}
      >
        Odejmij 5
      </button>
    </div>
  );
}
