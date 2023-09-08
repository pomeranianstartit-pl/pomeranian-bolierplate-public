import React from 'react';

import './styles/header.css';
import { Menu } from '../Components/Menu';
// 1. Import SVG as React component
import { ReactComponent as Logo } from '../Images/start-it-logo.svg';

// 2. Import SVG as URL
// import logo from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      {/* 1. sposób */}
      <Logo />
      <Menu />

      {/* 2. sposób */}
      {/*<img src={logo} alt="Logo" />*/}
      {/*<div className="header-title">Tytuł nagłówka</div>*/}
    </header>
  );
}
