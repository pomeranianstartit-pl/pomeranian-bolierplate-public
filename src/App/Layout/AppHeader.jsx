import React from 'react';

import './styles/header.css';

//utwurz mi komponent react o nazie Logo ze sciezki do pliku ktora podalem
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
// import { HeaderMenu } from '../Components/HeaderMenu';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { Ellipse } from '../Components/Icons/Ellipse';
import { RightArrow1 } from '../Components/Icons/RightArrow1';

export function AppHeader() {
  return (
    //tag jsx -> html
    <header>
      {/* // component react  */}
      <PomeranianLogo />
      {/* <HeaderMenu /> */}
      <div className="header-account">
        <SettingIcon />
        <Ellipse />
        <div className="header-account-name">
          <h4>Mateusz</h4>
          <p>kursant</p>
        </div>
        <RightArrow1 />
      </div>
    </header>
  );
}
