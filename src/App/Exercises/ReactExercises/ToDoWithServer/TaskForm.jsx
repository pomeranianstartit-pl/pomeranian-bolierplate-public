import { useState } from 'react';
import { ADDRESS, FORM_DATA } from './constants';
import './styles.css';

export const TaskForm = (isEditForm, task) => {
  const [addLoading, setAddLoading] = useState(null);
  const [addErrorId, setAddErrorId] = useState(null);

  const [title, setTitle] = useState(isEditForm ? task.title : '');
  const [note, setNote] = useState(isEditForm ? task.note : '');
  const [author, setAuthor] = useState(isEditForm ? task.author : '');

  const sendDisabled = !title || !note || !author;

  const handleSubmit = (event) => {
    event.preventDefault();
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
      </form>
    </div>
  );
};
