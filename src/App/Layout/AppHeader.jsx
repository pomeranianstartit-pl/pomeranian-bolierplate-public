import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/logo';
import { Link } from 'react-router-dom';
import arrowDown from '../Images/toggle-arrow.svg'; //inne importy
import cogWheel from '../Images/setting.svg';
export function AppHeader() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>

      <div className="menu">
        <button
          className="settings"
          onClick={() => {
            console.log('ClickedSettings');
          }}
        >
          <img src={cogWheel} alt="" srcSet="" />
        </button>
        <div className="profile-picture">
          <div className="placeholder" />
        </div>
        <div className="header-title">
          <div className="user">
            Adam
            <br />
            kursant
          </div>
        </div>
        <button
          className="dropdown"
          onClick={() => {
            console.log('ClickedDropdown');
          }}
        >
          <img src={arrowDown} alt="" srcSet="" />
        </button>
      </div>
    </header>
  );
}
