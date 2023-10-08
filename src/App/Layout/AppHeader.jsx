import React, { useState } from 'react';

import './styles/header.css';
import SettingsLogo from '../Images/setting.svg';
import PomeranianLogo from '../Images/start-it-logo.svg';
import snowWolf from '../Images/snow-wolf.png';
import { RoundedImage } from '../Components/RoundedImage/Index';
import { Arrow } from '../Components/Icons/Arrow';
import { ToggleMenu } from '../Components/ToggleMenu/ToggleMenu';

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

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
          {isMenuOpen && (
            <div className="togglemenu-relative">
              {<ToggleMenu handleClick={toggleMenu} />}
            </div>
          )}
          <Arrow onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
}
