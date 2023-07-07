import './EmptyTaskList.css';

export function EmptyTaskList({ addTask, isError, getData }) {
  const textButton = isError ? 'wystąpił błąd' : '';
  const action = isError ? getData : addTask;
  const title = isError
    ? 'nie udało się pobrać listy'
    : 'nie masz zadań do zrealizowania';

  return (
    <div>
      <p>Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.</p>
      <button onClick={addTask}>
        DODAJ ZADANIE
        {textButton}
      </button>
    </div>
  );
}
