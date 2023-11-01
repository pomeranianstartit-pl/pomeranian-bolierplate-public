import { useState } from 'react';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const handleLoadData = () => {
    fetch('http://localhost:3333/api/todo')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  //   console.log(
  //     obj && obj.noteDetails && obj.noteDetails.author && obj.noteDetails.author
  //   );

  //   console.log(obj.noteDetails?.author?.length && obj.noteDetails.author);

  return (
    <div>
      <h2>ToDoWithServer</h2>

      <h3>Lista zadań</h3>
      <ul>
        {data?.map((todo) => {
          return (
            <li>
              <div>{todo.title}</div>
              <div>{todo.author}</div>
              <div>{todo.note}</div>
            </li>
          );
        })}
      </ul>

      <div>----------------------</div>

      <button onClick={handleLoadData}>Pobierz listę zadań...</button>
    </div>
  );
};
