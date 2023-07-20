import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { SettingIcon } from '../Components/Icons/SettingIcon';

export function AppHeader() {
  function handleClikButton(message) {
    console.log(message)
  }

  return (
    <header>
      <Logo />
      <div className="header-info">
        <div className="setting-icon">
          <SettingIcon />
        </div>
        <div className='person-photo'>

        </div>
      </div>
      <div>
        <p>Gabriela</p>
        <p>kursantka</p>
      </div>
      <div className="header-title"></div>
    </header>
  );
}
