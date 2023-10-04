import { useState } from 'react';
import './TodoForm.css';
import axios from 'axios';
import { BASE_API_URL } from '../TodoList';

export function TodoForm({
  handleFetchTodoData,
  data,
  setFormVisible,
  setIdForEdit,
}) {
  const isEditMode = Boolean(data);

  const [title, setTitle] = useState(isEditMode ? data.title : '');
  const [author, setAuthor] = useState(isEditMode ? data.author : '');
  const [note, setNote] = useState(isEditMode ? data.note : '');

  const [prevTitle, setPrevTitle] = useState('');

  const [isError, setError] = useState(false);
  const [isSucces, setSucces] = useState(false);
  const [isInProgress, setInProgress] = useState(false);

  //Zadanie: obsłuż errory i znikanie, komunikaty. etc

  async function handleCreateTodo() {
    try {
      setInProgress(true);
      await axios.post(BASE_API_URL + '/api/todo', {
        title: title,
        note: note,
        author, // === author: author
      });

      setPrevTitle(title);

      setTitle('');
      setAuthor('');
      setNote('');

      setSucces(true);
      setError(false);
      setTimeout(() => {
        resetSuccesMessage();
      }, 5000);
    } catch (error) {
      console.log('error', error);
      setError(true);
    } finally {
      setInProgress(false);
    }
  }

  async function handleEditTodo() {
    console.log(title, author, note);
    try {
      setInProgress(true);
      await axios.put(BASE_API_URL + '/api/todo/' + data.id, {
        title, // skrócony zapis w funkcji
        note,
        author,
      });
      setSucces(true);
      setError(false);
      setTimeout(() => {
        resetSuccesMessage();
      }, 5000);
    } catch (error) {
      setError(true);
    } finally {
      setInProgress(false);
    }
  }

  function resetSuccesMessage() {
    setSucces(false);
  }

  //-------------------------prosta walidacj pól formularza-------------------------

  const isTitleToLong = title.length > 15;
  const isAuthorToLong = author.length > 15;
  const isNoteToLong = note.length > 150;

  const isFormValid = !isTitleToLong && !isAuthorToLong && !isNoteToLong;

  const isTitleGiven = title.length > 0;
  const isAuthorGiven = author.length > 0;
  const isNoteGiven = note.length > 0;

  const isFormFilled = isTitleGiven && isAuthorGiven && isNoteGiven;

  const isReadyToSend = isFormFilled && isFormValid;

  return (
    <div className="todo-form">
      <div className="todo-form__field">
        <label>Tytuł</label>
        <input
          className={isTitleToLong ? 'input-error' : ''}
          placeholder="Wpisz tytuł (max 15 znaków)"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          onFocus={resetSuccesMessage}
          maxLength={15}
        ></input>
      </div>

      {!isEditMode && (
        <div className="todo-form__field">
          <label>Autor</label>
          <input
            type="text"
            placeholder="Autor"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            onFocus={resetSuccesMessage}
          ></input>
        </div>
      )}
      <div className="todo-form__field">
        <label>Treść</label>
        <textarea
          placeholder="Wpisz zadanie"
          rows={5}
          cols={25}
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
          onFocus={resetSuccesMessage}
        />
      </div>
      {isInProgress && (
        <p className="todo-form_progress-mesage">
          Todo "{title}" jest dodawane...
        </p>
      )}
      {isError && (
        <p className="todo-form_error-mesage">Todo "{title}" nie udało się!</p>
      )}
      {isSucces && (
        <p className="todo-form_sucsess-mesage">
          {isEditMode ? (
            <>Todo "{title}" zostało zapisane pomyślnie!</>
          ) : (
            <>Todo "{prevTitle}" dodało się!</>
          )}
        </p>
      )}
      <div className="todo-form__buttons">
        <button
          className="app-button"
          onClick={() => {
            handleFetchTodoData(isEditMode ? data.id : undefined);
            setFormVisible(false);
            setIdForEdit(null);
          }}
        >
          COFNIJ
        </button>
        <button
          className="app-button"
          onClick={() => {
            if (isEditMode) {
              handleEditTodo();
            } else {
              handleCreateTodo();
            }
          }}
          disabled={!isReadyToSend || isInProgress}
        >
          {isEditMode ? 'ZAPISZ' : 'DODAJ'}
        </button>
      </div>
    </div>
  );
}
