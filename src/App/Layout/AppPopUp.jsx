import './styles/popUp.css';
import { useState } from 'react';

import toggleArrow from '../Images/toggle-arrow.svg';
// import { TogglePopUp } from './AppHeader';

export function AppPopUp({ handleClickPop }) {
  return (
    <div className="appPopUp">
      <img
        className="arrowImage"
        onClick={handleClickPop}
        src={toggleArrow}
        alt="arrow"
      />
      <button onClick="" className="button">
        ZALOGUJ SIE
      </button>
      <div className="text">
        Nie masz konta? <a href="wp.pl">Zarejestruj sie.</a>
      </div>
    </div>
  );
}
