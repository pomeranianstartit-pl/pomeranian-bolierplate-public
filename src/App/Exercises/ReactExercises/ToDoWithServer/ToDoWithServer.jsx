import React from 'react';
import './style.css';
import { CheckIcon } from '../../../Components/Icons/CheckIcon';
import { TrashIcon } from '../../../Components/Icons/TrashIcon';
import { FrameIcon } from '../../../Components/Icons/FrameIcon';

export function ToDoWithServer() {
  return (
    <div className="wrapper-todo">
      <a href="http://localhost:3000/exercises/react/todo-with-server">
        {' '}
        <span>&larr;</span>
        <b>ToDo</b>
      </a>
      <p>Tutaj znajdziesz listę swoich zadań.</p>
      <div className="buttonAddNewList">
        <button>+</button>
      </div>
      <div className="lists-elements">
        <div className="list-element">
          <div className="content">
            <h3>Zamówić catering </h3>
            <p className="author">Wojtek</p>
            <p className="date">20.04.2024, 18:03</p>
            <p className="note">
              Dla mnie wege, dla Pauliny ryba + wege. Zrobić zamówienie,
              zapłacić.{' '}
            </p>
          </div>
          <div className="icons">
            <div className="action-icons">
              <span className="action-icon">
                <CheckIcon color="#23213D" width="35" height="25" />
              </span>
              <span className="action-icon">
                <TrashIcon />
              </span>
              <span className="action-icon">
                <FrameIcon />
              </span>
              <p className="action-error">Nie udało się ukończyć</p>
            </div>
            <div className="status-ok">
              <CheckIcon color="#07C23B" width="50" height="35" />
              <p className="date">20.04.2024, 18:06</p>
            </div>
          </div>
        </div>
        <div className="list-element">
          <div className="content">
            <h3>Kupić spray na kleszcze</h3>
            <p>
              Wojtek
              <br />
              10.04.2024, 11:30
            </p>
            <p>
              Pamiętać, żeby sprawdzić skład i termin ważności preparatu.
              Zadzwonić do weta, żeby się upewnić, czy mają na stanie.
            </p>
          </div>
          <div className="Icon">
            <CheckIcon />
            <TrashIcon />
            <FrameIcon />
          </div>
        </div>
        <div className="list-element">
          <div className="content">
            <h3>Szczepienie kotka</h3>
            <p>
              Wojtek
              <br />
              15.04.2024, 15:30
            </p>
            <p>
              Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz
              szczepiona i umówić się z naszym wetery
            </p>
          </div>
          <div className="Icon">
            <CheckIcon />
            <TrashIcon />
            <FrameIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
