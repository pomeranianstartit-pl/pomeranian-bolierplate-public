import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/logo/Logo';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import togglearrow from '/root/projects/pomeranian-bolierplate-public/src/App/Images/toggle-arrow.svg';

export function AppHeader() {
  function handleClickButton(e) {
    e.console.log(e);
  }
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <div className="header-info">
        <button
          onClick={() => handleClickButton('settings')}
          className="setting-icon"
        >
          <SettingIcon />
        </button>
        <div className="person-photo">
          <SettingIcon />
        </div>
        <div className="personal-info">
          <p>Aleksander</p>
          <p>kursant</p>
        </div>
        <button
          onClick={() => handleClickButton('arrow')}
          className="toggle-arrow"
        >
          <img src={togglearrow} alt="ds" />
        </button>
      </div>
    </header>
  );
}
