import React from 'react';

import './styles/header.css';
import Logo from '../Images/start-it-logo.svg';
export function AppHeader() {
  return (
    <header>
      <div>
        {/* 1. sposób */}
        {/* <logo />*/}
        {/* 1. sposób */}
        {/* <img src="../Images/start-it-logo.svg" alt="Logo" /> */}

        <img src={Logo} alt="Logo" />
      </div>
    </header>
  );
}
