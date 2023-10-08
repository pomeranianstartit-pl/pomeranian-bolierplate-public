import './styles.css';
import VectorArrow from '../../Images/toggle-arrow.svg';
import { useState } from 'react';
import { Arrow } from '../Icons/Arrow';

export function ToggleMenu({ handleClick }) {
  return (
    <div className="togglemenu togglemenu-absolute">
      <div className="vector-wrapper">
        <Arrow onClick={handleClick} />
      </div>
      <button className="signIn-button">ZALOGUJ SIĘ</button>

      <div className="noAccount-question">
        Nie masz konta?
        <button className="register-button">Zarejestruj się.</button>
      </div>
    </div>
  );
}
