import React from 'react';

import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';
import settingLogo from '../Images/setting.svg';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import snowWolf from '../Images/snow-wolf.png';
import { Arrow } from '../Components/Icons/Arrow';

export function AppHeader() {
  return (
    <header>
      <div className="header-conteiner">
        <img src={PomeranianLogo} alt="Logo" />
        <div className="header-menu">
          <img src={settingLogo} alt="settingLogo" />
          <RoundedImage src={snowWolf} size={{ width: 50, height: 50 }} />
          <p className="student-item">
            <span>Karol</span>
            <span>kursant</span>
          </p>
          <Arrow />
        </div>
      </div>
    </header>
  );
}
