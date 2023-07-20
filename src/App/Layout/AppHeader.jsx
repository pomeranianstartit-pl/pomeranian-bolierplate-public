import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  function handleClikButton(message) {
    console.log(message)
  }

  return (
    <header>
      <div>
        <Logo />
        <div className="header-title"></div>
      </div>
      <div className="header-title"></div>
    </header>
  );
}
