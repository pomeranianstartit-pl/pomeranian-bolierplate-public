import { useEffect, useState } from 'react';
import { ADDRESS, FORM_DATA } from './constants';
import './styles.css';

// export const TaskForm = ({ handleFormVisibility, taskData = {} }) => {
//   const [addLoading, setAddLoading] = useState(null);
//   const [addErrorId, setAddErrorId] = useState(null);

//   const [title, setTitle] = useState(() => {
//     if (Object.keys(taskData).length === 0) {
//       return '';
//     } else {
//       return taskData.title;
//     }
//   });
//   const [note, setNote] = useState(() => {
//     if (Object.keys(taskData).length === 0) {
//       return '';
//     } else {
//       return taskData.note;
//     }
//   });
//   const [author, setAuthor] = useState(() => {
//     if (Object.keys(taskData).length === 0) {
//       return '';
//     } else {
//       return taskData.author;
//     }
//   });

//   const sendDisabled = !title || !note || !author;

//   const taskButtonStyle = () => {
//     if (sendDisabled) {
//       return 'taskButton disabled';
//     } else {
//       return 'taskButton';
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await addNewTask();
//     handleFormVisibility();
//   };

//   const addNewTask = async () => {
//     try {
//       const request = await fetch(ADDRESS, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, author, note }),
//       });
//       if (!request.ok) {
//         throw new Error('Something went wrong!');
//       }
//     } catch (error) {
//       console.log(error, '    set error');
//     }

//     setTitle('');
//     setAuthor('');
//     setNote('');
//   };

//   // const addNewTask = async () => {
//   //   try {
//   //     const request = await fetch(`${ADDRESS}`, {
//   //       method: 'POST',
//   //       header: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ title, author, note }),
//   //     });
//   //     if (!request.ok) {
//   //       throw new Error('Something went wrong!');
//   //     }
//   //     const data = await request.json();
//   //   } catch (error) {
//   //     console.log(error, '    set error');
//   //   }
//   // };

//   return (
//     <div>
//       <button
//         className="button-no-style button-plus"
//         onClick={() => {
//           handleFormVisibility();
//         }}
//       ></button>
//       <p className="task-heading">Dodawanie zadania. </p>
//       <form onSubmit={handleSubmit} className="form-task">
//         <div className="form-element">
//           <label htmlFor={FORM_DATA.TITLE.THE_NAME}>
//             {FORM_DATA.TITLE.TITLE_LABEL}
//           </label>
//           <input
//             className="text-input"
//             type={FORM_DATA.TITLE.INPUT_TYPE}
//             id={FORM_DATA.TITLE.THE_NAME}
//             name={FORM_DATA.TITLE.THE_NAME}
//             value={title}
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//           />
//         </div>
//         <div className="form-element">
//           <label htmlFor={FORM_DATA.NOTE.THE_NAME}>
//             {FORM_DATA.NOTE.TITLE_LABEL}
//           </label>
//           <textarea
//             className="text-input"
//             type={FORM_DATA.NOTE.INPUT_TYPE}
//             id={FORM_DATA.NOTE.THE_NAME}
//             name={FORM_DATA.NOTE.THE_NAME}
//             value={note}
//             onChange={(e) => {
//               setNote(e.target.value);
//             }}
//           />
//         </div>
//         <div className="form-element">
//           <label htmlFor={FORM_DATA.AUTHOR.THE_NAME}>
//             {FORM_DATA.AUTHOR.TITLE_LABEL}
//           </label>
//           <input
//             className="text-input"
//             type={FORM_DATA.AUTHOR.INPUT_TYPE}
//             id={FORM_DATA.AUTHOR.THE_NAME}
//             name={FORM_DATA.AUTHOR.THE_NAME}
//             value={author}
//             onChange={(e) => {
//               setAuthor(e.target.value);
//             }}
//           />
//         </div>
//         <div id="button-container-form">
//           <button
//             disabled={false}
//             className="taskButton back"
//             onClick={() => {
//               handleFormVisibility();
//             }}
//           >
//             COFNIJ
//           </button>
//           <button
//             disabled={sendDisabled}
//             type="submit"
//             className={taskButtonStyle()}
//           >
//             DODAJ
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
export const TaskForm = ({ handleFormVisibility, taskData }) => {
  const [formLoading, setFormLoading] = useState(null);
  const [taskFormError, setTaskFormError] = useState(false);
  const [message, setMessage] = useState('');

  const editMode = !(Object.keys(taskData).length === 0);

  // const [title, setTitle] = useState(taskData.title);
  // const [note, setNote] = useState(taskData.note);
  // const [author, setAuthor] = useState(taskData.author);
  const [title, setTitle] = useState(() => {
    if (editMode) {
      return taskData.title;
    } else {
      return '';
    }
  });
  const [note, setNote] = useState(() => {
    if (editMode) {
      return taskData.note;
    } else {
      return '';
    }
  });
  const [author, setAuthor] = useState(() => {
    if (editMode) {
      return taskData.author;
    } else {
      return '';
    }
  });

  const sendDisabled = !title || !note || !author;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormLoading(true);
    if (await HandleTask()) {
      handleFormVisibility();
    }
  };

  const handleBack = (event) => {
    setTaskFormError(false);
    handleFormVisibility();
  };

  const HandleTask = async () => {
    const apiAddress = editMode ? `${ADDRESS}/${taskData.id}` : ADDRESS;
    const apiMethod = editMode ? 'PUT' : 'POST';

    try {
      const request = await fetch(`${apiAddress}a`, {
        // method: 'PUT',
        method: `${apiMethod}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, note }),
      });

      if (!request.ok) {
        setFormLoading(false)
        setTaskFormError(true);
        throw new Error('Something went wrong!');
      }
      if (request.ok) {
        setTitle('');
        setAuthor('');
        setNote('');
        setFormLoading(false);
      }
    } catch (error) {
      console.log(error, '    set error');
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (taskFormError) {
      if (editMode) {
        setMessage('Błąd Edycji zadania.');
      } else {
        setMessage('Błąd Utworzenia zadania.');
      }
    }
  }, [taskFormError, editMode]);

  useEffect(() => {}, []);

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
        <div id="err-mess-cont">{message} </div>
        <div id="button-container-form">
          <button
            disabled={false}
            className="taskButton back"
            onClick={() => {
              handleBack();
            }}
          >
            COFNIJ
          </button>
          <button disabled={sendDisabled} type="submit" className="taskButton">
            {formLoading
              ? 'WYSYŁANIE...'
              : editMode === true
              ? 'EDYTUJ'
              : 'DODAJ'}
          </button>
        </div>
      </form>
    </div>
  );
};
