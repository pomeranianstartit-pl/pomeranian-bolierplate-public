// import React from 'react';
// import './style.css';
// import { useSelector } from 'react-redux';

// export function Redux() {
//   // ! Przykładowe pobranie stanu aplikacji z pierwszej implementacji
//   // const testValue = useSelector((state) => {
//   //   console.log(state, 'store aplikacji w ćwiczeniu Reduxa');

//   //   return state?.storeTest?.value ?? 'Not working';
//   // });
//   // ! --------------------------------------------------------------
//   return (
//     <div>
//       Redux
//       {/* <div>{testValue} - jej, wyświetlam stan naszego store'a</div> */}
//     </div>
//   );
// }
//---------------------------Wyżej poprzednia wersja, robocza-------------------------------------

import React, { useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByValue,
} from '../../../../Store/slices/counterSlice';
import { TestComponent } from './testowyKomponent';

export function Redux() {
  const [incrementValue, setIncrementValue] = useState('1');
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleAdd = () => dispatch(increment());
  const handleDec = () => dispatch(decrement());
  const handleSubVal = () => {
    dispatch(incrementByValue(Number(incrementValue)));
  };
  const handleIncByVal = (event) => {
    const value = event.target.value;
    setIncrementValue(value);
  };
  return (
    <div>
      <div>Nasz count: {count}</div>
      <button onClick={handleAdd}>Dodaj</button>
      <button onClick={handleDec}>Odejmij</button>
      <input onChange={handleIncByVal} type="text" value={incrementValue} />
      <button onClick={handleSubVal}>Dodaj: {incrementValue}</button>
      <TestComponent />
    </div>
  );
}
