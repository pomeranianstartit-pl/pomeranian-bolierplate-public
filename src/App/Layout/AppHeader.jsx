import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  return (
    <header>
      <Logo />     
      <div>
        <div className="header-title">Tytuł nagłówka</div>
      </div>
    </header>
  );
}


