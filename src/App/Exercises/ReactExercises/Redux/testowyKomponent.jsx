import { useState } from 'react';
import {
  multiplication,
  decrementByValue,
} from '../../../../Store/slices/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export function TestComponent() {
  const [multiValue, setMultiValue] = useState('3');
  const [decrementValue, setDecrementValue] = useState('1');
  const dispatch = useDispatch();
  // Dodany na potrzeby wyświetlania w returnie. Jeśli byśmy nie chcieli wyświetlać to nie musi byc tutaj useSelectora
  const count = useSelector((state) => state.counter.value);

  const handleMultiplication = () => {
    dispatch(multiplication(Number(multiValue)));
  };

  const handleDecrementByVal = () => {
    dispatch(decrementByValue(Number(decrementValue)));
  };

  const handleDecByVal = (event) => {
    const decByVal = event.target.value;
    setDecrementValue(decByVal);
  };

  const handleMultiByVal = (event) => {
    const multiInputVal = event.target.value;
    setMultiValue(multiInputVal);
  };

  return (
    <div>
      <div>Nasz count z testowego komponentu: {count}</div>
      <input onChange={handleMultiByVal} type="text" value={multiValue} />
      <button onClick={handleMultiplication}>Pomnóż</button>
      <input onChange={handleDecByVal} type="text" value={decrementValue} />
      <button onClick={handleDecrementByVal}>Odejmij {decrementValue}</button>
    </div>
  );
}
