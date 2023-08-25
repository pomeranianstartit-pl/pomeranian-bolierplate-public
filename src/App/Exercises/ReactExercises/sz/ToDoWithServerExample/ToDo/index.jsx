import { useState } from 'react';
import { requestHandler } from '../helpers';

export const ToDo = (props) => {
  const [deleteError, setDeleteError] = useState('');
  const [markAsDoneError, setMarkAsDoneError] = useState('');
  const {
    id,
    title,
    note,
    author,
    createdAt,
    doneDate,
    isDone,
    getData,
    setEditObject,
    setShowForm,
  } = props;

  const markAsDone = () => {
    setMarkAsDoneError('');
    requestHandler('PUT', `${id}/markAsDone`)
      .then(getData())
      .catch(setMarkAsDoneError('Nie udało się ukończyć zadania'));
  };

  const deleteToDo = () => {
    setDeleteError('');
    requestHandler('DELETE', `${id}`)
      .then(getData())
      .catch(setDeleteError('Nie udało się usunąć zadania'));
  };

  const handleEdit = () => {
    setEditObject({
      id,
      title,
      author,
      note,
    });
    setShowForm(true);
  };

  console.log(id, 'key');

  return (
    <div key={id}>
      <div>{title}</div>
      <div>{note}</div>
      <div>{author}</div>
      <div>{createdAt}</div>
      <button onClick={handleEdit}>Edytuj</button>
      <button onClick={markAsDone}>Zakończ</button>
      <button onClick={deleteToDo}>Usuń</button>
      {deleteError && <div>{deleteError}</div>}
      {markAsDoneError && <div>{markAsDoneError}</div>}
      {isDone && <div>Zakończone {doneDate}</div>}
    </div>
  );
};
