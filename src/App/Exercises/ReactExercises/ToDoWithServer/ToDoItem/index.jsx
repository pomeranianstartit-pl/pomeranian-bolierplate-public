import { useState } from 'react';
import pencilIcon from '../../../../Images/pencil.svg';
import trashIcon from '../../../../Images/trash.svg';
import tickIcon from '../../../../Images/tick.svg';

import { requestHandler } from '../helpers';

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
        setError('Błąd zaznaczenia jako wykonane!');
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
      <img src={pencilIcon} onClick={handleEdit} />
      <img src={trashIcon} onClick={handleDelete} />
      {isDone && <img src={tickIcon} onClick={handleMarkAsDone} />}
      {isDone && <div>Wykonano {doneDate}</div>}
      {error && <div>{error}</div>}
    </li>
  );
};
