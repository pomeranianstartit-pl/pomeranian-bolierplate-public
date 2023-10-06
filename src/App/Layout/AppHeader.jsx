import { useState } from 'react';
import React from 'react';
import LoginPanel from '../Components/LoginPanel';

import './styles/header.css';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';
import { ElipseIcon } from '../Components/Icons/ElipseIcon';
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';

export const AppHeader = ({ name, position }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleArrowClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    //tag jsx -> html
    <header>
      <div className="PomeranianLogo">
        {/* // component react */}
        <PomeranianLogo />
      </div>

      <div className="header-menu">
        <SettingIcon />
      </div>
      <ElipseIcon />

      {/* <HeaderMenu /> */}
      <div className="header-menu-user">
        <p>Katarzyna</p>
        <p>kursantka</p>
      </div>

      <ArrowIcon onClick={handleArrowClick} />

      {isMenuOpen && <LoginPanel onClick={handleArrowClick} />}
    </header>
  );
};
