import { useState } from 'react';
import { ToDo } from './Todo';
export function ToDoList(props) {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputvalue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputvalue(value);
  };
  const handleInputClick = () => {
    setToDoList([inputValue]);
  };
  return (
    <div>
      Moja aplikacja Todo
      <input
        name="Todo Input"
        placeholder="Co będziemy dziś robić"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={() => handleInputClick()}>Dodaj</button>
      {toDoList.map((todo) => (
        <ToDo key={todo} todo={todo} />
      ))}
    </div>
  );
}
