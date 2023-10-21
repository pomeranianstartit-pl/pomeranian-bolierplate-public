import { useState } from 'react';
import React from 'react';
import LoginPanel from '../Components/LoginPanel';

import './styles/header.css';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { SearchIcon } from '../Components/Icons/SearchIcon';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';
import { ElipseIcon } from '../Components/Icons/ElipseIcon';
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';

export const AppHeader = ({ name, position }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleArrowIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    //tag jsx -> html
    <header>
      <div className="PomeranianLogo">
        {/* // component react */}
        <PomeranianLogo />
      </div>
      <div className="sidebar">
        <i class="uil uil-search" SearchIcon></i>
        <input type="text" placeholder="Serach here..." />
      </div>
      <div className="setting-icon">
        <SettingIcon />
      </div>
      <div className="elipse-Icon">
        <ElipseIcon />
      </div>

      {/* <HeaderMenu /> */}
      <div className="header-menu-user">
        <p>Katarzyna</p>
        <p>kursantka</p>
      </div>
      <div className="drop-down-menu">
        <ArrowIcon onClick={handleArrowIconClick} />

        {isMenuOpen && <LoginPanel onClick={handleArrowIconClick} />}
      </div>
    </header>
  );
};
