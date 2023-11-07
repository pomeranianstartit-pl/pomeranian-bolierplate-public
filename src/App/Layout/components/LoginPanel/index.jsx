import React from 'react';
import './styles.css';
import { ReactComponent as RightArrow } from '../../../Images/right-arrow 1.svg';

const LoginPanel = ({ onClick }) => {
  return (
    <div className="header-panel">
      <RightArrow onClick={onClick} />

      <button className="login-button">Zaloguj się</button>

      <div>
        Nie masz konta?
        <button className="register-button">Zarejestruj się.</button>
      </div>
    </div>
  );
};
export default LoginPanel;
