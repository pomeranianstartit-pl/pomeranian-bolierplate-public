import React from 'react';

import './styles/header.css';

import logo from '../Images/start-it-logo.svg';
//  ../ wyjscie folder wyzej , ./ szukanie w tym samym folderze
export function AppHeader() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
}
