import { useState } from 'react';
import './styles.css';

const TODO_URL = 'http://localhost:3333/api/todo';

export function LocalDevAndFetch() {
  const [toDoUrl, setToDoUrl] = useState([]);

  function handleToDo() {
    const getToDo = async () => {
      //   const result = await fetch(TODO_URL)
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((json) => {
      //       setToDoUrl(json);
      //     })
      //     .catch((error) => console.log(error));

      try {
        const response = await fetch(TODO_URL);
        const json = await response.json();
        setToDoUrl(json);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getToDo();
  }
  return (
    <div>
      <p className="title">LocalDevAndFetch</p>
      <div>
        <button className="button" onClick={() => handleToDo()}>
          Fetch JSON
        </button>
      </div>
      <div>
        {toDoUrl.map(({ id, title, createdAt, author, isDone, note }) => (
          <ol>
            <li>{id}</li>
            <li>{title}</li>
            <li>{createdAt}</li>
            <li>{author}</li>
            <li>{isDone}</li>
            <li>{note}</li>
          </ol>
        ))}
      </div>
    </div>
  );
}
