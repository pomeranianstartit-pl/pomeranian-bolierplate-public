export function NoTasks(props) {
  const clickHandler = () => {
    props.func();
  };
  return (
    <div className="no-tasks">
      <div>{props.message}</div>
      <button className="no-task-button" onClick={clickHandler}>
        {' '}
        Odśwież widok{' '}
      </button>
    </div>
  );
}
