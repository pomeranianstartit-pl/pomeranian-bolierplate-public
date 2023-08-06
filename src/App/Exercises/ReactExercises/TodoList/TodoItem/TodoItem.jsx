import axios from 'axios';
import { formatDate } from '../../../../../Helpers/formatDate';
import { BinIcon } from '../../../../Images/Icons/BinIcon/BinIcon';
import './TodoItem.css';
import { BASE_API_URL } from '../TodoList';
import { useState } from 'react';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

export function TodoItem({
  todo,
  handleFetchTodoData,
  setIdForEdit,
  setFormVisible,
  updateTodoList,
}) {
  const { id, title, author, createdAt, isDone, doneDate, note } = todo;
  const [isRemoveError, setRemoveError] = useState(false);
  const [isDoneError, setDoneError] = useState(false);
  const itemClasses = `todo-item ${todo.isDone ? 'item--darker' : ''}`;

  function handleRemoveClick() {
    axios
      .delete(BASE_API_URL + '/api/todo/' + id)
      .then((response) => {
        handleFetchTodoData();
      })
      .catch((error) => {
        setRemoveError(true);
      });
  }

  function handleMarkAsDoneClick() {
    axios
      .put(BASE_API_URL + '/api/todo/' + id + '/markAsDone')
      .then((response) => {
        const updatedTodo = response.data;
        updateTodoList(updatedTodo);
        setDoneError(false); //jeśli wykona po ponownym kliknięciu to wyczyści błąd
      })
      .catch(() => {
        setDoneError(true);
      });
  }

  return (
    <div className={itemClasses} key={id}>
      <div className="todo-item__wrapper">
        <h3>{title}</h3>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {author}
        </div>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {formatDate(createdAt)}
        </div>
        <p className="todo-item__wrapper__text">{note}</p>
      </div>
      <div className="todo-item__actions">
        <button
          className="todo-item__actions__button"
          onClick={() => {
            handleMarkAsDoneClick();
          }}
        >
          &#10003; {/*ikona znakiem */}
        </button>
        <button
          className="todo-item__actions__button 
        todo-item__actions__icon"
          onClick={() => {
            setIdForEdit(id);
            setFormVisible(true);
          }}
        >
          <ModeEditOutlinedIcon /> {/*ikona z MUI */}
        </button>
        <button
          className="todo-item__actions__button 
        todo-item__actions__icon"
          onClick={() => {
            handleRemoveClick();
          }}
        >
          <BinIcon isError={isRemoveError} /> {/*ikona z FIGMY */}
        </button>
        {isDoneError && (
          <div className="todo-item__actions__error">
            Nie udało się zapamietać ukończenia
          </div>
        )}
        {isRemoveError && (
          <div className="todo-item__actions__error">Nie udało się usunąć</div>
        )}
        {isDone && (
          <>
            <div className="todo-item__actions__check">&#10003;</div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}
