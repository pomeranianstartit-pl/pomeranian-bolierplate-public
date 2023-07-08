import "./styles.css";

export function EmptyTaskList({ addTask, isError, getData }) {
  const text = isError
    ? "Przepraszamy. Nie udało się pobrać listy zadań."
    : "Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.";
  const action = isError ? getData : addTask;
  const textButton = isError ? "ODŚWIEŻ WIDOK" : "DODAJ ZADANIE";

  return (
    <div>
      <p>{text}</p>
      <button className="addTask" onClick={action}>
        {textButton}
      </button>
    </div>
  );
}
