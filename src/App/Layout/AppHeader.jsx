import React from 'react';

import './styles/header.css';

import { ReactComponent as Logo } from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      <div>
        <Logo />
      </div>
    </header>
  );
}
