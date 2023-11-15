import { useState } from 'react';

import { requestHandler } from '../helpers';

import { CheckIcon } from '../IconsToDo/CheckIcon';
import { GreenCheckIcon } from '../IconsToDo/GreenCheckIcon';
import { EditIcon } from '../IconsToDo/EditIcon ';
import { TrashIcon } from '../IconsToDo/TrashIcon';

export const ToDoItem = ({
  id,
  title,
  author,
  note,
  isDone,
  doneDate = '',
  getData,
  handleForm,
  setEditedItem,
}) => {
  const [error, setError] = useState(null);

  const handleMarkAsDone = () => {
    setError(null);
    requestHandler('PUT', `${id}/markAsDone`)
      .then(() => {
        getData();
      })
      .catch(() => {
        setError('Błąd zaznaczania jako wykonane!');
      });
  };

  const handleDelete = () => {
    setError(null);
    requestHandler('DELETE', id)
      .then(() => {
        getData();
      })
      .catch(() => {
        setError('Błąd usuwania zadania!');
      });
  };

  const handleEdit = () => {
    setEditedItem({
      id,
      title,
      author,
      note,
    });
    handleForm();
  };

  return (
    <li className="onetodo">
      <div className="onetodo">
        <div className="maintodo">
          <div className="maintodo">{title}</div>
          <div className="maintodo">{author}</div>
          <div className="maintodo">{note}</div>
        </div>

        <div className="iconstodo">
          <div className="iconstodo">
            {!isDone && (
              <button onClick={handleMarkAsDone}>
                <CheckIcon />
              </button>
            )}
            <button onClick={handleEdit}>
              <EditIcon />
            </button>

            <button onClick={handleDelete}>
              <TrashIcon />
            </button>
          </div>
          <div className="iconstodogreen">
            {isDone && (
              <div>
                <GreenCheckIcon /> <div>{doneDate}</div>
              </div>
            )}
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </li>
  );
};
