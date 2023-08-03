import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { default as toggleArrovSVG } from '../Images/toggle-arrow.svg'


export function AppHeader() {
  function handleClikButton(message) {
    console.log(message)
  }

  return (
    <header>
      <Logo />
      <div className="header-info">
        <button onClick={() => handleClikButton('I am settings button!')} className="setting-icon">
          <SettingIcon />
        </button>
        <div className='header-image-placeholder'></div>
        <div className='header-personal-info'>
          <p>Gabriela</p>
          <p>kursantka</p>
        </div>
        <button onClick={() => handleClikButton('I am dropdown button!')} className='header-drop-down-bnt'><img src={toggleArrovSVG} alt="dropdown button"></img></button>
        <div className="header-title"></div>
      </div>
    </header>
  );
}
