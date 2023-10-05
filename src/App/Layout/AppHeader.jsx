import React from 'react';

import './styles/header.css';

import PomerLogo from '../Images/start-it-logo.svg';
//  ../ wyjscie folder wyzej , ./ szukanie w tym samym folderze
export function AppHeader() {
  return (
    <header>
      <div>
        <img src={PomerLogo} alt="Logo" />
      </div>
    </header>
  );
}
