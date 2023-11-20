import React from 'react';
import './styles.css';
import { ReactComponent as RightArrow } from '../../../Images/right-arrow 1.svg';

const LoginPanel = ({ onClick }) => {
  return (
    <div>
      <div className="header-panel">
        <RightArrow onClick={onClick} className="arrow-button" />{' '}
        <button className="login-button">Zaloguj się</button>
        <div className="header-text">
          Nie masz konta?
          <button className="register-button">Zarejestruj się.</button>
        </div>
      </div>
    </div>
  );
};
export default LoginPanel;
