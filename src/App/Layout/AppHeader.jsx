import React from 'react';
import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';
import SettingsIcon from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
// import toggleArrow from '../Images/toggle-arrow.svg';
import { ArrowDown } from '../Components/Icons/Arrow';
import { RoundedImage } from '../Components/RoundedImage/roundedImage';

export function AppHeader() {
  return (
    <header>
      <div className="header-container">
        <img src={PomeranianLogo} alt="logo" />
        <div className="header-menu-container">
          <img src={SettingsIcon} alt="logo" />
          <div className="header-user-info">
            <RoundedImage src={snowWolf} size={{ width: 49, height: 49 }} />
            <div className="student-item">
              <span className="student-name">Arkadiusz</span>
              <span>kursant</span>
            </div>
            <ArrowDown />
          </div>
        </div>
        {/* <img src={toggleArrow} alt="logo" /> */}
      </div>
    </header>
  );
}
