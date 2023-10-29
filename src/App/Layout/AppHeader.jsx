import { useState } from 'react';
import './styles/header.css';
import PomeranianLogo from '../Images/start-it-logo.svg';
import SettingsIcon from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
import { ArrowDown } from '../Components/Icons/Arrow';
import { RoundedImage } from '../Components/RoundedImage/roundedImage';
import { PopUpMenu } from './components/PopUpMenu';

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
              {isArrowOpen && <PopUpMenu func={toggleArrow} />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
