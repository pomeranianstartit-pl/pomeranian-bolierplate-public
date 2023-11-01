import React from 'react';

import './styles/header.css';

import PomerLogo from '../Images/start-it-logo.svg';
import SettingLogo from '../Images/setting.svg';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import ProfilePhoto from '../Images/Piotr_Wojcik_WEEK4_CV.JPG';
import { Arrow } from '../Components/Icons/Arrow';
import { EditIcon } from '../Components/Icons/EditIcon';

//  ../ wyjscie folder wyzej , ./ szukanie w tym samym folderze
export function AppHeader() {
  return (
    <header>
      <div className="header-container">
        <img src={PomerLogo} alt="Logo" />
        <div className="items-container">
          <img src={SettingLogo} alt="Logo" />
          <RoundedImage src={ProfilePhoto} size={{ width: 50, height: 50 }} />
          <div className="name-container">
            <span>Piotr</span>
            <span className="student">kursant</span>
          </div>
          <Arrow />
        </div>
      </div>
    </header>
  );
}
