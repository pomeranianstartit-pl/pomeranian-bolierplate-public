import { useState } from 'react';
import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';
import SettingsIcon from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
// import toggleArrow from '../Images/toggle-arrow.svg';
import { ArrowDown } from '../Components/Icons/Arrow';
import { RoundedImage } from '../Components/RoundedImage/roundedImage';

export function AppHeader() {
  const [isArrowOpen, setIsArrowOpen] = useState(false);

  function toggleArrow() {
    setIsArrowOpen(!isArrowOpen);
    console.log('arrow open' + isArrowOpen);
  }

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
            <div className="menu-relative">
              <ArrowDown onClick={toggleArrow} className="arrow" />
              {isArrowOpen && (
                <div className="login-menu">
                  <div className="arrow-line">
                    <ArrowDown onClick={toggleArrow} className="arrow" />
                  </div>
                  <button className="login-button">zaloguj się</button>
                  <div>
                    Nie masz konta? <span> Zarejestruj się</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <img src={toggleArrow} alt="logo" /> */}
      </div>
    </header>
  );
}
