import { useState } from 'react';
import './style.css';

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
      <h2>TODO</h2>

      <h3>
        Tu znajdziesz listę swoich zadań <button>+</button>
      </h3>
      <ul>
        {data?.map((todo) => {
          return (
            <li>
              <div>{todo.title}</div>
              <div>{todo.author}</div>
              <div>{todo.note}</div>
              <div className="Icons">
                <tickIcon />
                <pencilIcon />
                <trashIcon />
              </div>
            </li>
          );
        })}
      </ul>

      <div>----------------------</div>

      <button onClick={handleLoadData}>Pobierz listę zadań...</button>
    </div>
  );
};
