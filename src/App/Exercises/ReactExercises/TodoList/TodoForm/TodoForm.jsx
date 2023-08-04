import { useState } from 'react';
import './TodoForm.css';
import axios from 'axios';
import { BASE_API_URL } from '../TodoList';

export function TodoForm({ setAddingMode }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');

  const [isError, setError] = useState(false);
  const [isSucces, setIsSucces] = useState(false);

  //Zadanie: obsłuż errory i znikanie, komunikaty. etc

  async function handleCreateTodo() {
    console.log(title, author, note);
    try {
      await axios.post(BASE_API_URL + '/api/todo', {
        title: title,
        note: note,
        author, // === author: author
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  const isReadyToSend =
    title.length > 0 && author.length > 0 && note.length > 0;
  console.log(isReadyToSend);

  return (
    <div className="todo-form">
      <div className="todo-form__field">
        <label>Tytuł</label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
      </div>
      <div className="todo-form__field">
        <label>Autor</label>
        <input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        ></input>
      </div>
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
        />
      </div>
      Formularz
      <div className="todo-form__buttons">
        <button
          className="app-button"
          onClick={() => {
            setAddingMode(false);
          }}
        >
          COFNIJ
        </button>
        <button
          className="app-button"
          onClick={() => {
            handleCreateTodo();
          }}
          disabled={!isReadyToSend}
        >
          ZAPISZ
        </button>
      </div>
    </div>
  );
}
