import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import {
  increment,
  decrement,
  reset,
  incrementByValue,
  setSpecificValue,
} from '../../../../store/slices/counterSlice';

export const CounterReducer = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const [inputValue, setInputValue] = useState(0);

  const countFromLocalStorage = localStorage.getItem('countls');


  const handleAdd = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementByValue(inputValue));
  };
  const setCountValue = () => {
    if (Number.isInteger(countFromLocalStorage)) {
      dispatch(setSpecificValue(localStorage.getItem('countls')));
    } else {
      return;
    }
  };

  useEffect(() => {
    setCountValue();
  }, []);

  return (
    <div>
      <h1>Ćwiczenia związane z Redux - Counter</h1>
      <div>
        <div>{count ? count : ''}</div>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleDec}>DEC</button>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleIncrementByValue}>ADD VALUE</button>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Clear Local Storage
        </button>

        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
    </div>
  );
};
