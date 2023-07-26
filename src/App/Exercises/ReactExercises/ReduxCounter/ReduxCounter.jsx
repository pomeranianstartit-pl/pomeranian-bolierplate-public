import React from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount } from '../../../Store/counterSlice';

export function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="inkrementator">
      <div>Aktualnie kliknięto {count}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Dodaj 1
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(3));
        }}
      >
        Dodaj 3
      </button>
    </div>
  );
}
