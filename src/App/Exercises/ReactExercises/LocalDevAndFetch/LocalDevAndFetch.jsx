import * as React from 'react';
import { useState, useEffect } from 'react';

export function LocalDevAndFetch() {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    async function fetchToDos() {
      const results = await fetch('http://localhost:3333/api/todo');
      if (results.ok) {
        const data = await results.json();
        console.log(data);
        setToDoList(data);
      }
    }
    fetchToDos();
  }, []);

  return (
    <>
      <h1>TODO List </h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tytuł</th>
            <th>Notatka</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {toDoList.map((listItem) => (
            <tr key={listItem.id}>
              <td>{listItem.id}</td>
              <td>{listItem.title}</td>
              <td>{listItem.note}</td>
              <td>{listItem.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default LocalDevAndFetch;
