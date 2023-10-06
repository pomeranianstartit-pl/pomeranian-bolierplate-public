import React from 'react';

import './styles/header.css';

// dwie kropki poniewaz musimy wrocic do katalogu wyzej
import pomeranianLogo from '../Images/start-it-logo.svg';
import settingLogo from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
import toggleArrow from '../Images/toggle-arrow.svg';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import { PersonInfo } from '../Components/PersonInfo/PersonInfo';

export function AppHeader() {
  return (
    <header>
      <div className="headerGeneralContainer">
        <div className="headerLeftContainer">
          <img src={pomeranianLogo} width="93" height="25" alt="Logo" />
        </div>
        <div className="headerRightContainer">
          <img src={settingLogo} width="26" height="26" alt="setting Logo" />

          <RoundedImage src={snowWolf} size={{ width: 49, height: 49 }} />
          <PersonInfo />
          <img src={toggleArrow} width="20" height="20" alt="arrow" />
        </div>
      </div>
    </header>
  );
}
