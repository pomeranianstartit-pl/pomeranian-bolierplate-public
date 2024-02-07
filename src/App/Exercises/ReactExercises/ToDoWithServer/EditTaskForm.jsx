import { useEffect, useState } from 'react';
import { ADDRESS, FORM_DATA } from './constants';
import './styles.css';

export const EditTaskForm = ({ handleEditFormVisibility, taskData }) => {
  const [addLoading, setAddLoading] = useState(null);
  const [addErrorId, setAddErrorId] = useState(null);
  const editMode = !(Object.keys(taskData).length === 0);

  // const [title, setTitle] = useState(taskData.title);
  // const [note, setNote] = useState(taskData.note);
  // const [author, setAuthor] = useState(taskData.author);
  const [title, setTitle] = useState(() => {
    if (editMode) {
      return '';
    } else {
      return taskData.title;
    }
  });
  const [note, setNote] = useState(() => {
    if (editMode) {
      return '';
    } else {
      return taskData.note;
    }
  });
  const [author, setAuthor] = useState(() => {
    if (editMode) {
      return '';
    } else {
      return taskData.author;
    }
  });

  const sendDisabled = !title || !note || !author;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await EditTask();
    handleEditFormVisibility();
  };

  const EditTask = async () => {
    try {
      const request = await fetch(`${ADDRESS}/${taskData.id}`, {
        // method: 'PUT',
        method: () => {
          if (editMode) {
            return 'PUT';
          } else {
            return 'POST';
          }
        },
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

  useEffect(() => {
    console.log(taskData.title, 'task data title here');
  }, []);

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
          <button
            disabled={false}
            className="taskButton back"
            onClick={() => {
              handleEditFormVisibility();
            }}
          >
            COFNIJ
          </button>
          <button type="submit" className="taskButton">
            {editMode === true ? 'EDYTUJ' : 'COFNIJ'}
          </button>
        </div>
      </form>
    </div>
  );
};
