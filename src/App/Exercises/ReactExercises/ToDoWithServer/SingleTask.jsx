// import { PropaneSharp } from '@mui/icons-material';
import { BinSymbol } from '../../../Components/ToDoComponents/Bin';
import { TickSymbol } from '../../../Components/ToDoComponents/Tick';
import './styles.css';

export function SingleTask({ task, binFunc, tickFunc, del_error, done_error }) {
  const dataStyler = (created) => {
    let date = created.slice(0, 10);
    const dateArray = date.split('-').reverse();
    date = dateArray.join('.');
    const newData = `${date}, ${created.slice(11, 16)}`;
    return newData;
  };

  const doneOrInProgress = (isDone) => {
    if (isDone) {
      return 'single-task-block done';
    } else {
      return 'single-task-block undone';
    }
  };

  const doneErrorClassName = (errId, taskId) => {
    if (errId !== taskId) {
      return 'button-no-style tick';
    } else {
      return 'button-no-style error';
    }
  };
  console.log(task, 'task data styler');

  return (
    <div key={task.id} className={doneOrInProgress(task.isDone)}>
      <div className="task-block-container">
        <div className="task-head">{task.title}</div>
        <div className="task-info">
          <p>{task.author}</p>
          <p>{dataStyler(task.createdAt)}</p>
        </div>
        <div className="task-note">{task.note}</div>
      </div>
      <div className="right-block">
        <div className="task-buttons-block">
          {del_error !== task.id && !task.isDone && (
            <button
              onClick={task.id === done_error ? () => {} : tickFunc}
              className={doneErrorClassName(done_error, task.id)}
            >
              <TickSymbol />
              {done_error === task.id && (
                <p className="req-failure done">nie udało się ukończyć</p>
              )}
            </button>
          )}
          <button
            onClick={binFunc}
            className={
              del_error !== task.id
                ? 'button-no-style bin'
                : 'button-no-style error'
            }
          >
            <BinSymbol />
            {del_error === task.id && (
              <p className="req-failure">nie udało się usunąć</p>
            )}
          </button>
        </div>
        <div className="task-info-block">
          {task.isDone && (
            <div className="task-done">
              <TickSymbol />
              <p className="task-info">{dataStyler(task.doneDate)}</p>
            </div>
          )}
          {task.isdone && (
            <div className="task-done">
              <TickSymbol />
              <p className="task-info">{dataStyler(task.doneDate)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// );
// } else {
// return (
//   <div key={task.id} className="single-task-block done">
//     <div className="task-block-container">
//       <div className="task-head">{task.title}</div>
//       <div className="task-info">
//         <p>{task.author}</p>
//         <div>{dataStyler(task.createdAt)}</div>
//       </div>
//       <div className="task-note">{task.note}</div>
//     </div>
//     <div className="task-buttons-block-done">
//       <div className="to-do-tick">
//         <button onClick={binFunc} className="button-no-style">
//           <BinSymbol />
//         </button>
//       </div>
//       <div className="to-do-tick">
//         <button onClick={tickFunc} className="button-no-style">
//           <TickSymbol />
//         </button>
//         <p className="task-info">{dataStyler(task.doneDate)}</p>
//       </div>
//     </div>
//   </div>
// );
// }}
