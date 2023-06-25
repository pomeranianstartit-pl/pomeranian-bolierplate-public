import './SingleTask.css';

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

  return (
    <div className="task-index-page">
      <div className="task-list">
        <div className="task-single">
          <div className="task-row-title">
            <h3>{title}</h3>
          </div>
          <p className='author'>{author}</p>
          <p className='name'>{name}</p>
          {isDone && <p className='date'>Zakończone {parseDate(doneDate)}</p>}
          <p className='note'>{note}</p>
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
        
        </div>
      </div>
    </div>
  );
}