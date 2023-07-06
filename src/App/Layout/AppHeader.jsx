import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/logo/Logo';

export function AppHeader() {
  return (
    <header>
      <div>
        <Logo/>
        <div className="header-title">Tytuł nagłówka</div>
      </div>
    </header>
  );
}
