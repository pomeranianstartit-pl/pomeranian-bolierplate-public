import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  return (
    <header>
      <div>
        <Logo />
        <div className="header-title">Tu ma być nagłówek</div>
      </div>
    </header>
  );
}
