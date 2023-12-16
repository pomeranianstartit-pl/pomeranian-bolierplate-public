import { useState } from 'react';

import { apiRequest } from '../../helpers';

import { API_URL, FORM_DATA, TEXTS } from '../../constants';

export const FormTodo = ({
  editedItem,
  setEditedItem,
  handleFormVisibility,
  setTodos,
  //   handleBack,
}) => {
  const isEditForm = Boolean(editedItem);
  const [formLoading, setFormLoading] = useState(false);
  const [formErrorId, setFormErrorId] = useState(null);

  const [title, setTitle] = useState(isEditForm ? editedItem.title : '');
  const [author, setAuthor] = useState(isEditForm ? editedItem.author : '');
  const [note, setNote] = useState(isEditForm ? editedItem.note : '');

  const sendDisabled = !title || !author || !note;

  const addTodo = () => {
    apiRequest(API_URL, {
      method: 'POST',
      loadingHandler: setFormLoading,
      errorHandler: setFormErrorId,
      body: { title, author, note },
      updateHandler: (data) => {
        setTodos((prevState) => [...prevState, data]);
        handleFormVisibility();
        setTitle('');
        setAuthor('');
        setNote('');
      },
      errorMessage: TEXTS.API.ERRORS.ADD,
    });
  };

  const editTodo = () => {
    apiRequest(`${API_URL}/${editedItem.id}`, {
      method: 'PUT',
      id: editedItem.id,
      loadingHandler: setFormLoading,
      errorHandler: setFormErrorId,
      body: { title, author, note },
      updateHandler: (data) => {
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === editedItem.id) return data;

            return todo;
          })
        );
        setEditedItem(null);
        setTitle('');
        setAuthor('');
        setNote('');
        handleFormVisibility();
      },
      errorMessage: TEXTS.API.ERRORS.EDIT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditForm) {
      editTodo();
    } else {
      addTodo();
    }
  };

  const handleBack = () => {
    setEditedItem(null);
    handleFormVisibility();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={FORM_DATA.TITLE.KEY_NAME}>
          {FORM_DATA.TITLE.LABEL}
        </label>
        <input
          id={FORM_DATA.TITLE.KEY_NAME}
          name={FORM_DATA.TITLE.KEY_NAME}
          type={FORM_DATA.TITLE.TYPE}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={FORM_DATA.AUTHOR.KEY_NAME}>
          {FORM_DATA.AUTHOR.LABEL}
        </label>
        <input
          id={FORM_DATA.AUTHOR.KEY_NAME}
          name={FORM_DATA.AUTHOR.KEY_NAME}
          type={FORM_DATA.AUTHOR.TYPE}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={FORM_DATA.NOTE.KEY_NAME}>{FORM_DATA.NOTE.LABEL}</label>
        <textarea
          id={FORM_DATA.NOTE.KEY_NAME}
          name={FORM_DATA.NOTE.KEY_NAME}
          type={FORM_DATA.NOTE.TYPE}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleBack}>COFNIJ</button>
        <button disabled={formLoading || sendDisabled} type="submit">
          {formLoading ? 'WYSYŁANIE...' : isEditForm ? 'EDYTUJ' : 'DODAJ'}
        </button>
      </div>
      {formErrorId && <div>Nie udało się dodać zadania</div>}
    </form>
  );
};