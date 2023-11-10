import { PropaneSharp } from '@mui/icons-material';
import { BinSymbol } from '../../../Components/ToDoComponents/Bin';
import { TickSymbol } from '../../../Components/ToDoComponents/Tick';
import './styles.css';

export function SingleTask({ task, binFunc }) {
  const dataStyler = (created) => {
    let date = created.slice(0, 10);
    const dateArray = date.split('-').reverse();
    date = dateArray.join('.');
    const newData = `${date}, ${created.slice(14, 19)}`;
    return newData;
  };

  if (!task.isDone) {
    return (
      <div key={task.id} className="single-task-block undone">
        <div className="task-block-container">
          <div className="task-head">{task.title}</div>
          <div className="task-info">
            <p>{task.author}</p>
            <p>{dataStyler(task.createdAt)}</p>
          </div>
          <div className="task-note">{task.note}</div>
        </div>
        <div className="task-buttons-block">
          <div className="to-do-tick">
            <TickSymbol />
          </div>
          <div className="to-do-tick">
            <button onClick={binFunc} className="button-no-style">
              <BinSymbol />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div key={task.id} className="single-task-block done">
        <div className="task-block-container">
          <div className="task-head">{task.title}</div>
          <div className="task-info">
            <p>{task.author}</p>
            <div>{dataStyler(task.createdAt)}</div>
          </div>
          <div className="task-note">{task.note}</div>
        </div>
        <div className="task-buttons-block-done">
          <div className="to-do-tick">
            <BinSymbol />
          </div>
          <div className="to-do-tick">
            <TickSymbol />
            <p className="task-info">{dataStyler(task.doneDate)}</p>
          </div>
        </div>
      </div>
    );
  }
}
