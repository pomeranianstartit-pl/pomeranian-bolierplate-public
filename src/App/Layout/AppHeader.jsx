import React from 'react';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { Logo } from '../Components/Logo/Logo';

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
