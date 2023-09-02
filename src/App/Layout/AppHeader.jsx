import React from 'react';

import './styles/header.css';
// 1. Import SVG as React component
import { ReactComponent as Logo } from '../Images/start-it-logo.svg';
import { ReactComponent as Settings } from '../Images/setting.svg';
import { ReactComponent as Arrow } from '../Images/toggle-arrow.svg';
import { ReactComponent as Ellipse } from '../Images/Ellipse 2.svg';

// 2. Import SVG as URL
// import logo from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      {/* 1. sposób */}
      <Logo />
      <div className="right-menu">
        <Settings />
        <Ellipse />
        <div className="text">
          <b className="michu">Michał</b>
          <p className="kursant">kursant</p>
        </div>
        <Arrow />
      </div>
      {/* 2. sposób */}
      {/*<img src={logo} alt="Logo" />*/}
    </header>
  );
}
