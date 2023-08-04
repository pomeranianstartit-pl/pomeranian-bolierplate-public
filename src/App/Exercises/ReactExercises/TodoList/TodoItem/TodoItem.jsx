import axios from 'axios';
import { formatDate } from '../../../../../Helpers/formatDate';
import { BinIcon } from '../../../../Images/Icons/BinIcon/BinIcon';
import './TodoItem.css';
import { BASE_API_URL } from '../TodoList';
import { useState } from 'react';

export function TodoItem({ todo, handleFetchTodoData }) {
  const { id, title, author, createdAt, isDone, doneDate, note } = todo;
  const [isRemoveError, setRemoveError] = useState(false);
  const itemClasses = `item ${todo.isDone ? 'item--darker' : ''}`;

  function handleRemoveClick() {
    console.log('UsuńId:', id);

    axios
      .delete(BASE_API_URL + '/api/todo/' + id)
      .then((response) => {
        console.log('usunięty to do id:', response);
        handleFetchTodoData();
      })
      .catch((error) => {
        console.log('usuwanie nie udało się:', error);
        setRemoveError(true);
      });
  }
  return (
    <div className={itemClasses} key={id}>
      <div className="item__wrapper">
        <h3>{title}</h3>
        <div className="item__wrapper__text item__wrapper__text--smaller">
          {author}
        </div>
        <div className="item__wrapper__text item__wrapper__text--smaller">
          {formatDate(createdAt)}
        </div>
        <p className="item__wrapper__text">{note}</p>
      </div>
      <div className="item__actions">
        <button
          className="item__actions__button 
        item__actions__icon"
          onClick={() => {
            handleRemoveClick();
          }}
        >
          <BinIcon isError={isRemoveError} />
        </button>
        {isRemoveError && (
          <div className="item__actions__error">nie udało się usunąć</div>
        )}
        {isDone && (
          <>
            <div className="item__actions__check">&#10003;</div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}
