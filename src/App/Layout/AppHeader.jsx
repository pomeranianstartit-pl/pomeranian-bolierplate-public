import React from 'react';

import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';
import SettingLogo from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import { Arrow } from '../Components/Icons/Arrow';
export function AppHeader() {
  return (
    <header>
      <div className="header_container">
        <img src={PomeranianLogo} alt="Logo" />
        <div className="header_menu">
          <img src={SettingLogo} alt="setting Logo" />
          <RoundedImage src={snowWolf} size={{ width: 49, height: 49 }} />

          <div className="header_name">
            <span>Artur</span>
            <span className="header_name_position">Kursant</span>
          </div>
          <Arrow />
        </div>
      </div>
    </header>
  );
}
