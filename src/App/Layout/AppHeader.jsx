import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import arrowDown from '../Images/toggle-arrow.svg';
import settingsIcon from '../Images/setting.svg';
import profilowe from '../Images/profilowe_prywatne_kolo.png';

const handleSettingsClick = () => {
  console.log('Settings Clicked');
  window.location.href = '/settings';
};

export function AppHeader() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu">
      <button className="settings-btn">
  <img
    src={settingsIcon}
    className="settings-logo"
    alt=""
    onClick={handleSettingsClick}
  />
</button>

        <div className="user-profile">
        <img src={profilowe} className="profilowe" alt="" />
         
          <div className="user">
            <p className="user-name">Amadeusz</p>
            <p className="user-position">Szewczyk</p>
          </div>
        </div>
        <button
          className="arrow-btn"
          onClick={() => {
            console.log('Arrow Clicked');
          }}
        >
          <img src={arrowDown} className="arrow" alt="" />
        </button>

        {/* <div className="header-title"></div> */}
      </div>
    </header>
  );

  
}


