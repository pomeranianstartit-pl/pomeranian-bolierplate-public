import React from 'react';

import toggleArrow from '../../../Images/toggle-arrow.svg';

import './styles.css';

const LoginPanel = ({ onClick }) => {
  return (
    <div onClick={onClick} className="header-panel">
      <img onClick={onClick} className="more" src={toggleArrow} alt="more" />
      <div className="panel-content">
        <button className="login-button">ZALOGUJ SIĘ</button>
        <div>
          Nie masz konta?
          <button className="register-button">Zarejestruj się</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;