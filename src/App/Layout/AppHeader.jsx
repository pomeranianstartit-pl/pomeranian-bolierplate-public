import { useState } from 'react';
import React from 'react';

import './styles/header.css';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';
import { ElipseIcon } from '../Components/Icons/ElipseIcon';

//utworz mi komponent react o nazie Logo ze sciezki do pliku ktora podalem
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
// import { HeaderMenu } from '../Components/HeaderMenu';

export function AppHeader() {
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
      <div>
        <ArrowIcon />
      </div>

    </header>
  );
}
