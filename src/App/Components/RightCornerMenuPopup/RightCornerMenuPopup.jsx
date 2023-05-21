import React, { useState } from 'react';
import './styles.css';
import { MenuArrow } from '../Icons/MenuArrow';

export const RightCornerMenuPopup = () => {
  const [isTrue, setIsTrue] = useState(true);

  const clickHandler = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="container">
      <div className="menu-arrow" onClick={clickHandler}>
        <MenuArrow />
      </div>
      {isTrue && (
        <div className="popup-container">
          <div className="popup">
            <MenuArrow className="arrow-on-the-right" />
            <div className="login-box">
              <p className="login-text">Zaloguj się</p>
            </div>
            <p className="register-text1">
              Nie masz konta?{' '}
              <span className="register-link">Zarejestruj się </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
