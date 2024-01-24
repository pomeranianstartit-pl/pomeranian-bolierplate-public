import { useState } from 'react';
import { ADDRESS, FORM_DATA } from './constants';
import './styles.css';
import { PlusSymbol } from '../../../Components/ToDoComponents/Plus';

export const TaskForm = ({ isEditForm, handleFormVisibility }) => {
  const [addLoading, setAddLoading] = useState(null);
  const [addErrorId, setAddErrorId] = useState(null);

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [author, setAuthor] = useState('');

  const sendDisabled = !title || !note || !author;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addNewTask();
    handleFormVisibility();
  };

  const addNewTask = async () => {
    try {
      const request = await fetch(ADDRESS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, note }),
      });
      if (!request.ok) {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.log(error, '    set error');
    }

    setTitle('');
    setAuthor('');
    setNote('');
  };

  // const addNewTask = async () => {
  //   try {
  //     const request = await fetch(`${ADDRESS}`, {
  //       method: 'POST',
  //       header: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ title, author, note }),
  //     });
  //     if (!request.ok) {
  //       throw new Error('Something went wrong!');
  //     }
  //     const data = await request.json();
  //   } catch (error) {
  //     console.log(error, '    set error');
  //   }
  // };

  return (
    <div>
      <button
        className="button-no-style button-plus"
        onClick={() => {
          handleFormVisibility();
        }}
      >
        <PlusSymbol />
      </button>
      <p className="task-heading">Dodawanie zadania. </p>
      <form onSubmit={handleSubmit} className="form-task">
        <div className="form-element">
          <label htmlFor={FORM_DATA.TITLE.THE_NAME}>
            {FORM_DATA.TITLE.TITLE_LABEL}
          </label>
          <input
            className="text-input"
            type={FORM_DATA.TITLE.INPUT_TYPE}
            id={FORM_DATA.TITLE.THE_NAME}
            name={FORM_DATA.TITLE.THE_NAME}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor={FORM_DATA.NOTE.THE_NAME}>
            {FORM_DATA.NOTE.TITLE_LABEL}
          </label>
          <textarea
            className="text-input"
            type={FORM_DATA.NOTE.INPUT_TYPE}
            id={FORM_DATA.NOTE.THE_NAME}
            name={FORM_DATA.NOTE.THE_NAME}
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor={FORM_DATA.AUTHOR.THE_NAME}>
            {FORM_DATA.AUTHOR.TITLE_LABEL}
          </label>
          <input
            className="text-input"
            type={FORM_DATA.AUTHOR.INPUT_TYPE}
            id={FORM_DATA.AUTHOR.THE_NAME}
            name={FORM_DATA.AUTHOR.THE_NAME}
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <div id="button-container-form">
          <button type="submit" className="newTaskButton">
            DODAJ
          </button>
        </div>
      </form>
    </div>
  );
};
