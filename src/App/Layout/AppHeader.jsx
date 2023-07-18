import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';

export function AppHeader() {
  return (
    <header>
      <div className="naglowek">
        {/* <Logo></Logo> */}

        <div className="header-title">
          <Logo />
        </div>
        <div>
          <div className="settings-button">
            <button>
              <SettingIcon />
            </button>
          </div>
          <p className="name">Anna</p>
          <p className="kursant">kursant</p>
          <div className="header-user">
            <button>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
