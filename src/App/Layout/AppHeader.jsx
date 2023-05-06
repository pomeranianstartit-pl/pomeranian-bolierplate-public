import React from 'react';

import { Logo } from '../Components/Logo/Logo';

import './styles/header.css';

export function AppHeader() {
  return (
    <header>
      <div>
        <Logo />
        {/* Można też tak, jeśli komponent przyjmuje jakąś wartość: <Logo></Logo> */}
        <div className="header-title">Tytuł nagłówka</div>
      </div>
    </header>
  );
}
