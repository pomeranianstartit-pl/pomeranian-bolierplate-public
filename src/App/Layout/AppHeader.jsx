import React from 'react';
import { Logo } from '../Components/logo/logo';
import './styles/header.css';
import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo />
        </Link>
        <div className="header-title"></div>
      </div>
    </header>
  );
}
