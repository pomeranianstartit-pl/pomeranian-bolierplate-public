import React from 'react';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { Elipse2 } from '../Components/Icons/Elipse2';
import { RightArrow } from '../Components/Icons/RightArrow';

import './styles/header.css';

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
//import { HeaderMenu } from '../Components/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <PomeranianLogo />
      <div class="container">
        <SettingIcon />
        <Elipse2 />

        <div className="user">
          <p>Katarzyna </p>
          <p>kursant </p>
        </div>
        <RightArrow />
      </div>
    </header>
  );
}
