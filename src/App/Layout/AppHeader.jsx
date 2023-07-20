import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { SettingIcon } from '../Components/Icons/SettingIcon'
import { default as toggleArrowSvg } from '../Images/toggle-arrow.svg'
import { default as ellipseImageSvg } from '../Images/ellipse.svg'

export function AppHeader() {
  function handleClikButton(message) {
    console.log(message)
  }

  return (
    <header>
      <div><Logo /></div>
      <div className="header-info">
        <button onClick={() => handleClikButton('I am setting button!')}><SettingIcon /></button>
        <div>
          <img src={ellipseImageSvg} alt="name photo"></img>
        </div>
        <div className='header-personal-info'>
          <p>Gabriela</p>
          <p>kursantka</p>
        </div>
        <button onClick={() => handleClikButton('I am dropdown button!')}>
          <img src={toggleArrowSvg} alt="dropdown button"></img>
        </button>
      </div>
    </header>
  );
}
