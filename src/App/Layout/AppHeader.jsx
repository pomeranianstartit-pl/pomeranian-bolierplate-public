import React from 'react';

import './styles/header.css';

// 1. Import SVG as React component
import { ReactComponent as Logo } from '../Images/start-it-logo.svg';

// 2. Import SVG as URL
// import logo from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      <div>
        {/* 1. sposób */}
        <Logo />
        {/* 1. sposób */}
        {/* <img src={logo} /> */}
      </div>
    </header>
  );
}
