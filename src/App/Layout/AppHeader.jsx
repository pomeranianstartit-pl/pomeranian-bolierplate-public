import React from 'react';

import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      <div>
        <img src={PomeranianLogo} alt="logo" />
      </div>
    </header>
  );
}
