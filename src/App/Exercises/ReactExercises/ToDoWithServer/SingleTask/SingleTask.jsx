import './SingleTask.css';
import { useEffect, useState } from 'react';
// import trashcan from '../../../Images/kosz.svg';
// import tickmark from '../../../Images/ptaszek.svg';
import { parseDate } from '../helpers.js';

export function SingleTask(props) {
  const {
    name,
    author,
    note,
    title,
    deleteToDo,
    id,
    isError,
    handleEditTask,
    markAsDone,
    isDone,
    doneDate,
  } = props;

  // 15.04.2023, 15.30

  // const parsedDate = new Date(doneDate);
  // const finalDate = `${parsedDate.getDate()}.${parsedDate.getMonth()}.${parsedDate.getFullYear()}, ${parsedDate.getHours()}:${parsedDate.getMinutes()}`;

  return (
    <div className="task-index-page">
      <div className="task-list">
        <div className="task-single">
          <div className="task-row-title">
            <h3>{title}</h3>
          </div>
          <p>{author}</p>
          <p>{name}</p>
          <p>{note}</p>
          {isError && <p>Nie da się usunąć elementu</p>}
          <button
            onClick={() => {
              deleteToDo(id);
            }}
            className="button-delete"
          >
            USUŃ
          </button>
          <button
            onClick={() => {
              handleEditTask(id);
            }}
          >
            EDYTUJ
          </button>
          {!isDone && (
            <button
              onClick={() => {
                markAsDone(id);
              }}
            >
              ZAKOŃCZ
            </button>
          )}
          {isDone && <p>Zakończone {parseDate(doneDate)}</p>}
        </div>
      </div>
    </div>
  );
}
