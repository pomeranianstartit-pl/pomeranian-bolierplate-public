import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';

export function AppHeader() {
  return (
    <header>
      <div>
        {/* <Logo></Logo> */}

        <div className="header-title">
          <Logo />
        </div>
        <div className="header-user">
          <ArrowIcon />
        </div>
      </div>
    </header>
  );
}
