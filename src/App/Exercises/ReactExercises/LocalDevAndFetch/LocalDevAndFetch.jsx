import * as React from 'react';

import { useState, useEffect } from 'react';

export function LocalDevAndFetch() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    async function fetchToDos() {
      const results = await fetch('http://localhost:3333/api/todo');
      const data = await results.json();
      console.log(data);
      debugger;
      setToDoList(data);
    }

    fetchToDos();
  }, []);

  return (
    <>
      <h1>TODO List </h1>
      <table>
        {toDoList.map((listItem) => (
          <tr>
            <td>{listItem.id}</td>
            <td>{listItem.title}</td>
            <td>{listItem.note}</td>
            <td>{listItem.author}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
