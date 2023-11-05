import { BinSymbol } from '../../../Components/ToDoComponents/Bin';
import { TickSymbol } from '../../../Components/ToDoComponents/Tick';
import './styles.css';

export function SingleTask({ task }) {
  const dataStyler = (created) => {
    let date = created.slice(0, 10);
    const dateArray = date.split('-').reverse();
    date = dateArray.join('.');
    const newData = `${date}, ${created.slice(14, 19)}`;
    return newData;
  };

  return (
    <div className="single-task-block">
      <div className="task-block-container">
        <div className="task-head">{task.title}</div>
        <div className="task-info">
          <p>{task.author}</p>
          <p>{dataStyler(task.createdAt)}</p>
        </div>
        <div className="task-note">{task.note}</div>
      </div>
      <div className="task-buttons-block">
        <TickSymbol />
        <BinSymbol />
      </div>
    </div>
  );
}
