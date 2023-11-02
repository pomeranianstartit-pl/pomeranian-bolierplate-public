export const AddtoDo = () => {
  return (
    <div>
      <h4>Tytuł</h4>
      <input />
      <h4>Autor</h4>
      <input />
      <h4>Treść</h4>
      <textarea />
      <div>
        <button
          className="buttondodaj2"
          type="submit"
          onClick={() => {
            console.log('click on me2');
          }}
        >
          DODAJ
        </button>
        <button
          className="buttoncofnij"
          type="submit"
          onClick={() => {
            console.log('click on me3');
          }}
        >
          COFNIJ
        </button>
      </div>
    </div>
  );
};
