import { formatDate } from '../formatDate';
import './TodoItem.css';
import markerDone from '.././markerDone.svg';
import { BinIcon } from './BinIcone/BinIcon.jsx';

export function TodoItem(todo) {
  const { title, author, createdAt, isDone, doneDate, note } = todo.todoDetails; //destrukturyzacja todo

  return (
    <div className={isDone ? 'todo-item--done' : 'todo-item'}>
      <div className="todo-item__wrapper">
        <h3 className="todo-item__wrapper__title">{title}</h3>
        <div className="todo-item__wrapper__text--smaller">{author}</div>
        <div className="todo-item__wrapper__text--smaller">
          {formatDate(createdAt)}
        </div>
        <p className="todo-item__wrapper__text">{note}</p>
      </div>
      <div className="todo-item__side">
        <button className="todo-item__side__bin">
          <BinIcon isError={true} />
        </button>
        <div className="todo-item__side__confirm">
          {isDone && (
            <>
              <div>
                <img src={markerDone} alt="Done" />
              </div>
              <div>{formatDate(doneDate)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
