import { useState } from 'react';
import './styles.css';
import { RequestHandler } from '../../helpers';
export const ToDoItem = ({ item, setEditObject, setShowForm, getData }) => {
  const [error, setError] = useState();

  const handleEdit = () => {
    const { id, title, author, note } = item;
    console.log(item);
    setShowForm(true);
    setEditObject({ id, title, author, note });
  };

  const handleDelete = () => {
    const { id } = item;
    RequestHandler('DELETE', id)
      .then(() => {
        getData();
      })
      .catch(() => setError(`Wystąpił błąd!`));
  };

  const handleMarkAsDone = () => {
    const { id } = item;
    RequestHandler('PUT', `${id}/markAsDone`)
      .then(() => {
        getData();
      })
      .catch(() => setError(`Wystąpił błąd!`));
  };

  return (
    <div className="itemList">
      <div>
        <h5>{item.title}</h5>
        <p>{item.author}</p>
        <p>{item.createdAt}</p>
        <p>{item.note}</p>
      </div>
      <div>
        {!item.isDone && (
          <button onClick={handleMarkAsDone} className="markButton">
          </button>
        )}
        {item.isDone && <span>{item.doneDate}</span>}
        <button onClick={handleEdit} className='editButton'></button>
        <button onClick={handleDelete} className='deleteButton'></button>
      </div>
    </div>
  );
};

// id   integer($int64)
// title    string
// createdAt    string($date-time)
// author   string
// isDone   boolean
// note string
// doneDate
