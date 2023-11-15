import { useState } from 'react';

import { requestHandler } from '../../helpers';
import './styles.css';

export const ToDoForm = ({
  editedItem,
  setEditedItem,
  handleFormVisibilty,
  getData,
}) => {
  const isEditMode = Boolean(editedItem);

  const [title, setTitle] = useState(isEditMode ? editedItem.title : '');
  const [author, setAuthor] = useState(isEditMode ? editedItem.author : '');
  const [note, setNote] = useState(isEditMode ? editedItem.note : '');
  const [error, setError] = useState(null);

  const handleBack = () => {
    handleFormVisibilty();
  };

  const handleAdd = () => {
    setError(null);
    requestHandler('POST', null, { title, author, note })
      .then(() => {
        getData();
        handleFormVisibilty();
      })
      .catch(() => {
        setError('Błąd dodawania zadania!');
      });
  };

  const handleEdit = () => {
    setError(null);
    requestHandler('PUT', editedItem.id, { title, author, note })
      .then(() => {
        getData();
        handleFormVisibilty();
        setEditedItem(null);
      })
      .catch(() => {
        setError('Błąd edycji zadania');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    isEditMode ? handleEdit() : handleAdd();
  };

  return (
    <div>
      <div>{isEditMode ? 'Edycja zadania' : 'Dodawanie zadanie'}</div>
      <form className='todoform' onSubmit={handleSubmit}>
        <div className='todoemptylist'>
          <label  htmlFor="title">Tytuł</label>
          <input
            id="title"
            placeholder="Kupić parasol na balkon"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='todoemptylist'>
          <label htmlFor="author">Autor</label>
          <input
            id="author"
            placeholder="Wojtek"
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className='todoemptylist'>
          <label htmlFor="note">Treść</label>
          <textarea
            id="note"
            placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
            type="text"
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className='todo5a'>
          <button className='todosec' onClick={handleBack}>Cofnij</button>
          <button className='todoprim' type="submit">{isEditMode ? 'Edytuj' : 'Dodaj'}</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};