import React from 'react';
import { useState } from 'react';
import './styles/header.css';

// dwie kropki poniewaz musimy wrocic do katalogu wyzej
import pomeranianLogo from '../Images/start-it-logo.svg';
import settingLogo from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
import toggleArrow from '../Images/toggle-arrow.svg';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import { PersonInfo } from '../Components/PersonInfo/PersonInfo';
import { AppPopUp } from './AppPopUp';

// export function TogglePopUp() {
//   const [popUpOpen, setPopUpOpen] = useState(false);
//   setPopUpOpen(!popUpOpen);
// }

export function AppHeader() {
  const [popUpOpen, setPopUpOpen] = useState(false);

  function togglePopUp() {
    setPopUpOpen(!popUpOpen);
  }

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
          <div className="arrowWrapper">
            <img
              className="arrowImage"
              onClick={togglePopUp}
              src={toggleArrow}
              width="20"
              height="20"
              alt="arrow"
            />
            {popUpOpen && (
              <div className="divPopUp">
                <AppPopUp handleClickPop={togglePopUp} />
              </div>
            )}
            {/* <div className="arrowPopUp"></div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
