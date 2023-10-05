import React, { useState } from 'react';
import './styles.css';

import { SettingIcon } from '../Icons/SettingIcon';

import { ReactComponent as Ellipse } from '../../Images/Ellipse.svg';

import { ReactComponent as RightArrow } from '../../Images/right-arrow.svg';

import { ReactComponent as Search } from '../../Images/search.svg';

import { ReactComponent as Notification } from '../../Images/notification.svg';

export const HeaderMenu = () => {
  //   otwarcia/zamknięcia okna logowania
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Funkcja obsługi kliknięcia ikony RightArrow
  const handleRightArrowClick = () => {
    // stan otwarcia/zamknięcia okna logowania
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

      <Ellipse className="avatar" />

      <div className="header-menu-user">
        {' '}
        <p>Patryk</p>
        <p>kursant</p>
      </div>
      <RightArrow
        className="header-rightarrow"
        onClick={handleRightArrowClick}
      />
      {isLoginOpen && (
        <div className="login-popup">
          <div>
            <button src="x" className="login-Button">
              Zaloguj się
            </button>
          </div>
          <div>
            <RightArrow
              className="header-rightarrow-close"
              onClick={handleRightArrowClick}
            />
          </div>
          <div>
            <p>
              Nie masz konta?{' '}
              <a href="x" className="login-register">
                {' '}
                Zarejestruj się.
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
