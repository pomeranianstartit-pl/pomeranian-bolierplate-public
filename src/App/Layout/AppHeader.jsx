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
      <div className="header-container">
        <img src={PomeranianLogo} alt="Logo" />
        <div className="header-menu">
          <img src={settingLogo} alt="" />
          <RoundedImage src={snowWolf} size={{ width: 49, height: 49 }} />
          <div className="student-item">
            <span>Patrycja</span>
            <span>kursant</span>
          </div>
          <Arrow />
        </div>
      </div>
    </header>
  );
}
