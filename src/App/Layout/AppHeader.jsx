import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { SettingIcon } from '../Components/Icons/SettingIcon'
import { default as toggleArrowSvg } from '../Images/toggle-arrow.svg'
import { default as ellipseImageSvg } from '../Images/ellipse.svg'

export function AppHeader() {
  return (
    <header>
      <Logo />
      <div className="header-info">
        <SettingIcon />
        <div>
          <img src={ellipseImageSvg} alt="name photo"></img>
        </div>
        <div>
          <p>Gabriela</p>
          <p>kursantka</p>
        </div>
        <div>
          <img src={toggleArrowSvg} alt="dropdown button"></img>
        </div>
      </div>
    </header>
  );
}
