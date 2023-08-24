import './style.css';

export function AddToDoItem({ onAddClick, onResetClick }) {
  return (
    <div className="wrapper-add-todo-item">
      <h3>Dodawanie zadania.</h3>

      <div className="field">
        <div className="label">Tytuł</div>
        <input placeholder="Wpisz tytuł" type="text"></input>
      </div>
      <div className="field">
        <div className="label">Autor</div>
        <input placeholder="Wpisz imię autora" type="text"></input>
      </div>
      <div className="field">
        <div className="label">Treść</div>
        <input placeholder="Treść" type="text"></input>
      </div>
      <div className="error">Wystąpił błąd, spróbuj ponownie.</div>
      <div className="action-buttons">
        <button type="reset" onClick={onResetClick}>
          COFNIJ
        </button>
        <button type="submit" onClick={onAddClick}>
          DODAJ
        </button>
      </div>
    </div>
  );
}
