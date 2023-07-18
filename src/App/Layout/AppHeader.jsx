import React from 'react';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { ToggleArrow } from '../Components/Icons/ToggleArrow';
import flowers from '../Images/tiles/flowers.jpg';
import { RoundImage } from '../Components/RoundImage/RoundImage';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  const handleButtonOnClick = (message) => {
    console.log(message);
  };

  return (
    <header>
      <div className="header-logo">
        <Logo />
      </div>
      <div className="header-menu">
        <button
          onClick={() => handleButtonOnClick('setting')}
          className="header-menu-svg"
        >
          <SettingIcon />
        </button>
        <div>
          <RoundImage src={flowers} size="50px" />
        </div>
        <div>
          <p>Iwona</p>
          <p>Kursant</p>
        </div>
        <button
          onClick={() => handleButtonOnClick('dropdown')}
          className="toggle-arrow-header header-menu-svg"
        >
          <ToggleArrow />
        </button>
      </div>
    </header>
  );
}
