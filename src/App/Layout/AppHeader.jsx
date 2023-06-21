import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <div className="header-title">Tytuł nagłówka</div>
      </div>
    </header>
  );
}
