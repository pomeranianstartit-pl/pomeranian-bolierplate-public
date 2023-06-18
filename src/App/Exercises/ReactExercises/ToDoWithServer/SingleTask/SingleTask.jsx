import { useEffect } from 'react';
import './SingleTask.css';
import { useState } from 'react';
// import { TickIcon } from '../../../Components/Icons/TickIcon';

export const SingleTask = ({
  title,
  note,
  author,
  deleteToDo,
  id,
  isError,
}) => {
  return (
    <div className="proba">
      <div>
        <div className="todo-containers">
          <div>
            <button onClick={() => deleteToDo(id)}>usuń element</button>
            <p className="boxpar">{title}</p>
            <p className="name_date">{author}</p>
            <p className="parinfo">{note}</p>
            {isError && <p>Nie da się usunąć</p>}

            {/* <div className="lastdiv_div">
              <div>
                <TickIcon />
              </div>{' '}
              <div className="name_date">20.04.2024, 18:06</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
