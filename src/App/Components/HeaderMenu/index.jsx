import React, { useState } from 'react';
import './styles.css';

import { SettingIcon } from '../Icons/SettingIcon';

import { ReactComponent as Ellipse } from '../../Images/avatar.svg';

import { ReactComponent as RightArrow } from '../../Images/right-arrow.svg';

import { ReactComponent as Search } from '../../Images/search.svg';

import { ReactComponent as Notification } from '../../Images/notification.svg';

export const HeaderMenu = () => {
  // Użyj useState, aby śledzić stan otwarcia/zamknięcia okna logowania
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Funkcja obsługi kliknięcia ikony RightArrow
  const handleRightArrowClick = () => {
    // Zmień stan otwarcia/zamknięcia okna logowania
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div className="header--menu">
      <div>
        <Search />
        <input className="header-search" />
      </div>
      <Notification />
      <SettingIcon />

      <Ellipse />

      <div className="header-menu-user">
        {' '}
        <p>Patryk</p>
        <p>kursant</p>
      </div>
      <RightArrow onClick={handleRightArrowClick} />
      {isLoginOpen && (
        <div className="login-popup">
          <div>
            <button className="login-Button">Zaloguj się</button>
          </div>
          {/* Na przykład formularz logowania */}
        </div>
      )}
    </div>
  );
};
