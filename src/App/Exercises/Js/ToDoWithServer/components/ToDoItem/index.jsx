import { useState } from 'react';

import { requestHandler } from '../../helpers';

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
    <li>
      <div>{title}</div>
      <div>{author}</div>
      <div>{note}</div>

      <button onClick={handleEdit}>edytuj</button>
      <button onClick={handleDelete}>usuń</button>
      {!isDone && <button onClick={handleMarkAsDone}>Wykonaj</button>}
      {isDone && <div>Wykonano {doneDate}</div>}
      {error && <div>{error}</div>}
    </li>
  );
};
