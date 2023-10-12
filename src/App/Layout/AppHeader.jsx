import { React } from 'react';
import { useState } from 'react';

import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';
import settingLogo from '../Images/setting.svg';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import snowWolf from '../Images/snow-wolf.png';
import { Arrow } from '../Components/Icons/Arrow';

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header>
      <div className="header-conteiner">
        <img src={PomeranianLogo} alt="Logo" />
        {/* <button onClick={toggleMenu}>Kliknij!</button>
        {isMenuOpen && <div>WYświetlono!</div>}
        {!isMenuOpen && <div>Wyświetl</div>} */}
        <div className="header-menu">
          <img src={settingLogo} alt="settingLogo" />
          <RoundedImage src={snowWolf} size={{ width: 50, height: 50 }} />
          <p className="student-item">
            <span>Karol</span>
            <span>kursant</span>
          </p>
          {/* <Arrow onClick={toggleMenu}>
            {isMenuOpen && (
              <div onClick={toggleMenu} className="menu">
                <img
                  onClick={toggleMenu}
                  className="settingLogo"
                  src={settingLogo}
                  alt="settingLogo"
                />
              </div>
            )}
          </Arrow>
          <div className="panel-content">
            <button className="login-button">Zaloguj się</button>
            <div>
              Nie masz konta
              <button className="register-button">Zarejestruj się</button>
            </div>
          </div> */}
          <Arrow onClick={toggleMenu}></Arrow>
          {isMenuOpen && (
            <div onClick={toggleMenu} className="header-panel">
              <img
                onClick={toggleMenu}
                className="more"
                src={Arrow}
                alt="more"
              />
              <div className="panel-content">
                <button className="login-button">Zaloguj się</button>
                <div>
                  Nie masz konta
                  <button className="register-button">Zarejestruj się</button>
                </div>
              </div>
            </div>
          )}

          <div className="menu">
            {isMenuOpen && <div>WYświetlono!</div>}
            {!isMenuOpen && <div>Wyświetl</div>}
          </div>
        </div>
      </div>
    </header>
  );
}
