// import { ReactComponent as Kosz } from "../../../../Images/kosz.svg";
// import { ReactComponent as Edit } from "../../../../Images/Edit.svg";
import { EditIcon } from '../../../../Components/Icons/EditIcon';
import bin from '../../../../Images/bin.svg';

import { parseDate, requestHandler } from '../helpers.js';

import './styles.css';
import { useState } from 'react';

export function ToDo(props) {
  const {
    id,
    title,
    author,
    note,
    createdAt,
    doneDate,
    isDone,
    getData,
    setEditObject,
    setShowCreateForm,
  } = props;

  const [deleteError, setDeleteError] = useState('');
  const [markAsDoneError, setMarkAsDoneError] = useState('');

  const markAsDone = async (id) => {
    setMarkAsDoneError('');

    requestHandler('PUT', `${id}/markAsDone`)
      .then((response) => {
        getData();
      })
      .catch(() => {
        setMarkAsDoneError('Nie udało się ukończyć');
      });
  };

  const deleteToDo = async (id) => {
    setDeleteError('');

    requestHandler('DELETE', id)
      .then(() => {
        getData();
      })
      .catch(() => {
        setDeleteError('Nie udało się usunąć');
      });
  };

  return (
    <div key={id} className="task-index-page">
      <div className="task-list">
        <div className="task-single">
          <div className="task-row-title">
            <h3>{title}</h3>
            <button
              className="button-delete"
              onClick={() => {
                deleteToDo(id);
              }}
            >
              <img src={bin} alt="kosz" />
              {/* <Kosz /> */}
            </button>
          </div>
          <p>{author}</p>
          <button
            className="button-edit"
            onClick={() => {
              setShowCreateForm(true);
              setEditObject({
                id,
                title,
                author,
                note,
              });
            }}
          >
            <EditIcon />
            {/* <Edit /> */}
          </button>
          <p>{title}</p>
          <p>{note}</p>
          {/* {parseDate("2023-07-08T12:00:00.300Z")} */}
          <p>{parseDate(createdAt)}</p>

          {!isDone && (
            <button
              className="button-check"
              onClick={() => {
                markAsDone(id);
              }}
            >
              {/* <Check /> */}
            </button>
          )}
          {deleteError && <p>{deleteError}</p>}
          {markAsDoneError && <p>{markAsDoneError}</p>}
          {isDone && <p>Zakończone {parseDate(doneDate)}</p>}
        </div>
      </div>
    </div>
  );
}
