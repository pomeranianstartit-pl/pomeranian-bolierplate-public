import React from 'react';

import './styles/header.css';
import SettingsLogo from '../Images/setting.svg';
import PomeranianLogo from '../Images/start-it-logo.svg';
import snowWolf from '../Images/snow-wolf.png';
import { RoundedImage } from '../Components/RoundedImage/Index';
import { Arrow } from '../Components/Icons/Arrow';

export function AppHeader() {
  return (
    <header>
      <div className="headerContainer">
        <img src={PomeranianLogo} alt="Logo" />
        <div className="headerMenu">
          <img src={SettingsLogo} alt="SettingsLogo" />

          <RoundedImage src={snowWolf} size={{ width: 50, height: 50 }} />

          <div className="NameAndTitle">
            <span>Przemysław</span>
            <span>kursant</span>
          </div>
          <Arrow />
        </div>
      </div>
    </header>
  );
}
