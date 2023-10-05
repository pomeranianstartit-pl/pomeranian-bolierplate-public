import React from 'react';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { RightArrow } from '../Components/Icons/RightArrow';
import myphoto from '../Images/myphoto.jpg';

import './styles/header.css';

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
//import { HeaderMenu } from '../Components/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <PomeranianLogo />
      <div class="container">
        <SettingIcon />
        <img src={myphoto} />

        <div className="user">
          <p>Katarzyna </p>
          <p>kursant </p>
        </div>
        <button>
          <RightArrow />
        </button>
      </div>
    </header>
  );
}
