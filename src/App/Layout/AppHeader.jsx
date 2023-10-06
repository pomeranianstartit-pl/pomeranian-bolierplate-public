import React from 'react';

import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';
import settingLogo from '../Images/setting.svg';
import snowwolf from '../Images/snow-wolf.png';
import { RoundedImage } from '../Components/RoundedImage/index';
import { Arrow } from '../Components/Icons/Arrow';

export function AppHeader() {
  return (
    <header>
      <div className="header-container">
        <img src={PomeranianLogo} alt="Logo" />
        <div className="header-menu">
          <img src={settingLogo} alt="setting Icon" />
          <RoundedImage src={snowwolf} size={{ width: 50, height: 50 }} />

          <p className="student-item">
            <span>Krzysztof</span>
            <span>kursant</span>
          </p>
          <Arrow />
        </div>
      </div>
    </header>
  );
}
