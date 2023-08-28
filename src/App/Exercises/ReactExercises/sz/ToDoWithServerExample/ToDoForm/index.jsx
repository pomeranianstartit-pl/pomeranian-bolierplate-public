import { useState } from 'react';
import { requestHandler } from '../helpers';

export const ToDoForm = ({ getData, setShowForm, editObject }) => {
  const isEditMode = Boolean(editObject);
  const [title, setTitle] = useState(isEditMode ? editObject.title : '');
  const [author, setAuthor] = useState(isEditMode ? editObject.author : '');
  const [note, setNote] = useState(isEditMode ? editObject.note : '');

  const [message, setMessage] = useState('');

  const addToDo = () => {
    requestHandler('POST', undefined, {
      title,
      author,
      note,
    })
      .then((response) => {
        setMessage(`Dodałeś zadanie o tytule: ${response.title}`);
      })
      .catch((response) => {
        setMessage(
          `Nie udało Ci się stworzyć zadania o tytule: ${response.title}`
        );
      })
      .finally(() => {
        getData();
        setShowForm(false);
      });
  };
  const editToDo = () => {
    requestHandler('PUT', editObject.id, {
      title,
      author,
      note,
    })
      .then((response) => {
        setMessage(`Dodałeś zadanie o tytule: ${response.title}`);
      })
      .catch((response) => {
        setMessage(
          `Nie udało Ci się stworzyć zadania o tytule: ${response.title}`
        );
      })
      .finally(() => {
        getData();
        setShowForm(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== '' && author !== '' && note !== '') {
      if (isEditMode) {
        editToDo();
      } else {
        addToDo();
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Tytuł</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Szczepienie doggo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="author">Autor</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Wojtek"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor="note">Treść</label>
        <textarea
          type="text"
          name="note"
          id="note"
          cols={60}
          rows={10}
          placeholder="Zmierzyć ile mamy miejsca na barierki..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <br />
        <button onClick={() => setShowForm(false)}>Cofnij</button>
        <button type="submit">{isEditMode ? 'Zapisz' : 'Dodaj'}</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};
