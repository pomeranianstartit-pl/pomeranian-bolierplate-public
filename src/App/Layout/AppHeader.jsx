import React from 'react';

import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';
import settingsLogo from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import { Arrow } from '../Components/Icons/Arrow';

export function AppHeader() {
  return (
    <header>
      <div className="header-container">
        <img src={PomeranianLogo} alt="Logo" />
        <div className="header-menu">
          <img src={settingsLogo} alt="Settings" />
          <RoundedImage src={snowWolf} size={{ width: 50, height: 50 }} />
          <p className="student-item">
            <span className="name">Anna</span>
            <span className="kursant">kursant</span>
          </p>
          <Arrow />
        </div>
      </div>
    </header>
  );
}
