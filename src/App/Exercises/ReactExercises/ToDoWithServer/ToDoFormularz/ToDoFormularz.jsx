import { useState } from 'react';
import { requestHandler } from '../../ToDoWithServer/helpers';
import './toDoFormularzStyles.css';
import toggleArrow from '../../../../Images/toggle-arrow.svg';

export const ToDoFormularz = ({
  editedItem,
  setEditedItem,
  handleFormVisibility,
  getData,
}) => {
  const isEditMode = Boolean(editedItem);

  const [title, setTitle] = useState(isEditMode ? editedItem.title : '');
  const [author, setAuthor] = useState(isEditMode ? editedItem.author : '');
  const [note, setNote] = useState(isEditMode ? editedItem.note : '');
  const [error, setError] = useState(null);

  const handleSaveData = () => {
    setError(null);
    requestHandler('POST', null, { title, author, note })
      .then(() => {
        getData();
        handleFormVisibility();
      })
      .catch(() => {
        setError('Błąd dodawania zadania!');
      });
  };

  const handleMoveBack = () => {
    handleFormVisibility();
  };

  const handleEdit = () => {
    setError(null);
    requestHandler('PUT, editedItem.id, { title, author, note }').then(() => {
      getData();
      handleFormVisibility();
      setEditedItem(null);
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    isEditMode ? handleEdit() : handleSaveData();
  };

  return (
    <div>
      <h2>
        <img
          src={toggleArrow}
          className="faqimg"
          alt="Tu powinien być obrazek"
        />
        TODO
      </h2>

      <div>{isEditMode ? 'Edycja zadania' : 'Dodawanie zadania'} </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tytuł</label>
          <input
            className="title"
            id="title"
            placeholder="Szczepienie kitku"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Autor</label>

          <input
            className="autor"
            id="author"
            placeholder="Jan"
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="note">Treść</label>
          <textarea
            id="note"
            placeholder="Szczepienie psa"
            type="text"
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        {/* <div>
        <input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">Scales</label>
      </div> */}
        <div className="saveButton-wrapper">
          <button>COFNIJ</button>

          <button type="submit">{isEditMode ? 'Edytuj' : 'Dodaj'}</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};
