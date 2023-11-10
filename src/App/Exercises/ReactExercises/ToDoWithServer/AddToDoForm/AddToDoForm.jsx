import './style.css';

export const AddNewToDoForm = ({ changeProperty }) => {
  return (
    <div>
      <p className="content-p">Dodawanie zadania</p>
      <div>
        <div className="title">Tytuł</div>
        <input
          name="title"
          onChange={changeProperty}
          placeholder="Kupić parasol na balkon"
        />
      </div>
      <div>
        <div className="title">Autor</div>
        <input name="author" onChange={changeProperty} placeholder="Wojtek" />
      </div>
      <div className="title">
        <div> Treść</div>
        <input
          name="note"
          onChange={changeProperty}
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
        />
      </div>
      <div className="buttons">
        <button className="button-cofnij">COFNIJ</button>
        <button className="button-dodaj">DODAJ</button>
      </div>
    </div>
  );
};
