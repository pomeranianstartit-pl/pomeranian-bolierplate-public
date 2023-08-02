import './TodoItem.css';
import { formatDate } from '../../../../Helpers/formatDate';
import { BinIcon } from '../../../../Images/BinIcon.jsx'

export function TodoItem({ todo }) {
  const { title, author, createdAt, note, isDone, doneDate } = todo;
  const itemClasses = `todo-item ${isDone ? 'todo-item--darker' : ''}`;

  return (
    <div className={itemClasses}>
      <div className="todo-item__wrapper">
        <h3 className="todo-item__wrapper__title">{title}</h3>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {author}
        </div>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {formatDate(createdAt)}
        </div>
        <p className="todo-item__wrapper__text">{note}</p>
      </div>
      <div className="todo-item__actions">
        <button className="todo-item__actions__button todo-item__actions__icon"><BinIcon /></button>
        {isDone && (
          <>
            <div className="todo-item__actions__icon todo-item__actions__icon--check-mark">&#10003;</div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}
