import { useState } from 'react';
import { ToDoList } from './components/todolist/todolist';
export function Exercise() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    return setNumber(number + 1);
  }
  return (
    <>
      <div>{number}</div>
      <button onClick={() => handleClick()}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <ToDoList />
    </>
  );
}
