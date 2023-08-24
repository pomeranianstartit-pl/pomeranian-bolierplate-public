import './style.css';

export const EditToDoItem = () => {
  return (
    <div>
      <div className="wrapper-edit-todo-item">
        <h3>Dodawanie zadania.</h3>

        <div className="field">
          <div className="label">Tytuł</div>
          <input placeholder="Wpisz tytuł" type="text"></input>
        </div>

        <div className="field">
          <div className="label">Treść</div>
          <input placeholder="Treść" type="text"></input>
        </div>
        <div className="error">Wystąpił błąd, spróbuj ponownie.</div>
        <div className="action-buttons">
          <button>COFNIJ</button>
          <button type="submit">ZAPISZ</button>
        </div>
      </div>
    </div>
  );
};
