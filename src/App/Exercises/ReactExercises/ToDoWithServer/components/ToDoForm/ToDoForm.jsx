import { useState } from 'react';
import { RequestHandler } from '../../helpers';

export const ToDoForm = ({
  setShowForm,
  getData,
  setEditObject,
  editObject,
}) => {
  console.log(editObject);
  const [todo, setTodo] = useState({
    title: editObject ? editObject.title : '',
    author: editObject ? editObject.author : '',
    note: editObject ? editObject.note : '',
  });
  const [formError, setFormError] = useState('');
  const isEditMode = Boolean(editObject);

  const editTodo = () => {
    console.log(editObject, todo, 'editTodo');
    RequestHandler('PUT', editObject.id, todo)
      .then(() => {
        getData();
        setShowForm(false);
      })
      .catch(() => setFormError(`Wystąpił błąd!`));
  };

  const handleChange = (e, key) => {
    setTodo({
      ...todo,
      [key]: e.target.value,
    });
  };

  const addTodo = () => {
    console.log(editObject, todo, 'editTodo');
    RequestHandler('POST', '', todo)
      .then(() => {
        getData();
        setShowForm(false);
      })
      .catch(() => setFormError(`Wystąpił błąd!`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    isEditMode ? editTodo() : addTodo();
    setEditObject();
  };

  const handleBack = () => {
    setShowForm(false);
    setEditObject();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Tytuł</label>
        <input
          type="text"
          name="title"
          onChange={(e) => handleChange(e, 'title')}
          value={todo.title}
          required
        />
      </div>
      {!isEditMode && (
        <div>
          <label htmlFor="author">Autor</label>
          <input
            type="text"
            name="author"
            onChange={(e) => handleChange(e, 'author')}
            value={todo.author}
            required
          />
        </div>
      )}
      <div>
        <label htmlFor="note">Treść</label>
        <textarea
          name="note"
          cols="30"
          rows="10"
          onChange={(e) => handleChange(e, 'note')}
          value={todo.note}
          required
        ></textarea>
      </div>
      <div>
        <button onClick={handleBack}>Cofnij</button>
        <input type="submit" value={isEditMode ? 'Edytuj' : 'Dodaj'} />
      </div>
    </form>
  );
};
