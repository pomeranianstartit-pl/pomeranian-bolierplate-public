import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByValue,
  reset,
} from '../../../../store/slices/counterSlice';

export const ReduxCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const [inputValue, setInputValue] = useState();
  const handleChangeInput = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(Number(inputValue)));
  };

  return (
    <div>
      <h1>Ćwiczenie związane z React+Redux!</h1>
      <div>
        <div>{count}</div>
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={handleChangeInput}
          />
        </div>
        <button onClick={handleAdd}>DODAJ</button>
        <button onClick={handleDecrement}>ODEJMIJ</button>
        <button onClick={handleReset}>RESETUJ</button>
        <button onClick={handleIncrementByValue}>DODAJ o {inputValue}</button>
      </div>
    </div>
  );
};
