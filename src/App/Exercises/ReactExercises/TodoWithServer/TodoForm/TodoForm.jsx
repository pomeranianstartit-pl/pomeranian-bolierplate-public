import { useState } from 'react';
import './TodoForm.css';
import { BASE_API_URL } from '../TodoWithServer';
import axios from 'axios';

export function TodoForm({
  setFormVisibility,
  handleFetchTodoData,
  data,
  setIdForEdit,
}) {
  const isEditMode = Boolean(data);

  const [title, setTitle] = useState(isEditMode ? data.title : '');
  const [author, setAuthor] = useState(isEditMode ? data.author : '');
  const [note, setNote] = useState(isEditMode ? data.note : '');

  const [prevTitle, setPrevTitle] = useState('');

  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isInProgress, setInProgress] = useState(false);

  async function handleEditTodo() {
    try {
      setInProgress(true);
      await axios.put(BASE_API_URL + '/todo/' + data.id, {
        title,
        note,
        author,
      });
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
  }

  async function handleCreateTodo() {
    try {
      setInProgress(true);
      await axios.post(BASE_API_URL + '/todo', {
        title: title,
        note, // === note: note
        author,
      });
      setPrevTitle(title);
      setAuthor('');
      setNote('');
      setTitle('');
      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
  }

  const titlePassLength = title.length <= 60;
  const notePassLength = note.length <= 500;
  const authorPassLength = author.length <= 25;
  const isReadyToSend =
    title.length > 0 &&
    author.length > 0 &&
    note.length > 0 &&
    titlePassLength &&
    notePassLength &&
    authorPassLength;
  console.log(titlePassLength);
  function resetSuccessMessage() {
    setSuccess(false);
  }
  return (
    <div className="todo-form">
      <div className="todo-form__field">
        <label className="todo-form__field__label">Tytuł</label>
        <input
          type="text"
          placeholder="Kup ser"
          className={
            titlePassLength
              ? 'todo-form__field__input--ok'
              : 'todo-form__field__input--error'
          }
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            resetSuccessMessage();
          }}
        />
        {!titlePassLength && (
          <p className="todo-form__field__warning">Za duża liczba znaków</p>
        )}
      </div>
      {!isEditMode && (
        <div className="todo-form__field">
          <label className="todo-form__field__label">Autor</label>
          <input
            type="text"
            placeholder="Jan Kowalski"
            className="todo-form__field__input"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
              resetSuccessMessage();
            }}
          />
          {!authorPassLength && (
            <p className="todo-form__field__warning">Za duża liczba znaków</p>
          )}
        </div>
      )}

      <div className="todo-form__field">
        <label className="todo-form__field__label">Treść</label>
        <textarea
          placeholder="Kup ser w biedronce"
          rows={10}
          cols={66}
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
            resetSuccessMessage();
          }}
        />
        {!notePassLength && (
          <p className="todo-form__field__warning">Za duża liczba znaków</p>
        )}
      </div>
      {isInProgress && <p>Zapisywanie to do...</p>}
      {isSuccess && (
        <p className="todo-form__success-message">
          Todo "{isEditMode ? title : prevTitle}" dodało się!
        </p>
      )}

      {isError && (
        <p className="todo-form__error-message">
          Wystąpił błąd, spróbuj ponownie!
        </p>
      )}

      <div className="todo-form__buttons">
        <button
          className="big-button"
          onClick={() => {
            setFormVisibility(false);
            handleFetchTodoData();
            setIdForEdit(null);
          }}
        >
          COFNIJ
        </button>
        <button
          className="big-button"
          onClick={() => {
            if (isEditMode) handleEditTodo();
            else handleCreateTodo();
          }}
          disabled={!isReadyToSend || isInProgress}
        >
          {!isEditMode ? 'DODAJ' : 'Zapisz'}
        </button>
      </div>
    </div>
  );
}
