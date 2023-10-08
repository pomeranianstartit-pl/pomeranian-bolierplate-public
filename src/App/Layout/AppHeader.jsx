import React from 'react';
import './styles/header.css';
import PomeranianLogo from '../Images/start-it-logo.svg';
import settingLogo from '../Images/setting.svg';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import snowWolf from '../Images/snow-wolf.png';
import { Arrow } from '../Components/Icons/Arrow';
import { LoginBox } from './LoginBox/LoginBox';

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <div className="header-container">
        <img src={PomeranianLogo} alt="Logo" />
        <div className="header-menu">
          <img src={settingLogo} alt="" />
          <RoundedImage src={snowWolf} size={{ width: 49, height: 49 }} />
          <div className="student-item">
            <span>Patrycja</span>
            <span>kursant</span>
          </div>
          <div className="box-relative">
            <Arrow onClick={toggleMenu}></Arrow>
          </div>
          {isMenuOpen && (
            <div className="box-absolute">
              <LoginBox handleClick={toggleMenu} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
