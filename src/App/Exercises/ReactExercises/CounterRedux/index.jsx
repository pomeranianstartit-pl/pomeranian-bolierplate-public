import { useDispatch, useSelector } from 'react-redux';

import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from '../../../../store/slices/counterSlice';
import { useState } from 'react';
export const Exercise = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const [inputValue, setInputValue] = useState(0);
  const handleAdd = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByValue = () => dispatch(incrementByValue(inputValue));
  return (
    <div>
      <h1>Ćwiczenie związane z Redux-counter</h1>
      <div>
        <div>
          {count}
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrementByValue}>
            ADD With {inputValue}
          </button>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};
