import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  return (
    <header>
      <div>
        <Logo />
        {/* <Logo></Logo> */}
        <div className="header-title">Witaj nagłówku!</div>
      </div>
    </header>
  );
}
