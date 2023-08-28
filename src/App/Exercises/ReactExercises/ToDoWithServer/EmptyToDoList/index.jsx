import './index.css';

export const EmptyToDoList = () => {
  return (
    <div>
      <h1>Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.</h1>
      <div className="dodajZad">
        <button>DODAJ ZADANIE</button>
      </div>
    </div>
  );
};
