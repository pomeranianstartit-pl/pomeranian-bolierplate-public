import { useState } from "react";
import { requestHandler } from "../helpers";

import "./styles.css";

export function AddToDo({
  setShowCreateForm,
  getData,
  editObject,
  setEditObject,
}) {
  const isEditMode = Boolean(editObject);
  const [message, setMessage] = useState();
  const [isPopupShown, setPopupVisibility] = useState(false);

  const [title, setTitle] = useState(isEditMode ? editObject.title : "");
  const [note, setNote] = useState(isEditMode ? editObject.note : "");
  const [author, setAuthor] = useState(isEditMode ? editObject.author : "");

  const addToDo = async () => {
    requestHandler("POST", undefined, {
      title,
      note,
      author,
    })
      .then((response) => {
        setMessage(`Dodałeś zadanie o tytule: ${response.title}`);
      })
      .catch((response) => {
        setMessage(`Nie udało Ci się dodać zadania: ${response.title}`);
      })
      .finally(() => {
        getData();
        setShowCreateForm(false);
      });
  };

  const editToDo = async () => {
    requestHandler("PUT", editObject.id, {
      title,
      note,
      author,
    })
      .then((response) => {
        setMessage(`Zaktualizowałeś zadanie o tytule: ${response.title}`);
      })
      .catch((response) => {
        setMessage(`Nie udało Ci się zaktualizować zadania: ${response.title}`);
      })
      .finally(() => {
        getData();
        setShowCreateForm(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== "" && note !== "" && author !== "") {
      if (isEditMode) {
        editToDo();
      } else {
        addToDo();
      }
    }
  };

  const handleBack = () => {
    setShowCreateForm(false);
    getData();
    setEditObject();
  };

  return (
    <div className="add-task-page">
      <button className="button-delete-addtask" onClick={handleBack}>
        Cofnij do To do list
      </button>
      <h3>TODO</h3>
      <p>Dodawanie zadania</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="add-task-label">
          Tytuł
        </label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="Kupić parasol na balkon"
          autoFocus
          className="add-task-input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="author" className="add-task-label">
          Autor
        </label>
        <br />
        <input
          type="text"
          id="author"
          value={author}
          name="author"
          placeholder="Wojtek"
          className="add-task-input"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor="text" className="add-task-label">
          Treść
        </label>
        <br />
        <textarea
          name="text"
          id="text"
          value={note}
          cols="60"
          rows="10"
          className="add-task-input text-area"
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
          onChange={(e) => setNote(e.target.value)}
        ></textarea>

        <button type="submit">{isEditMode ? "Zapisz" : "Dodaj"}</button>

        <button className="button-delete-addtask" onClick={handleBack}>
          Cofnij
        </button>
      </form>
    </div>
  );
}
