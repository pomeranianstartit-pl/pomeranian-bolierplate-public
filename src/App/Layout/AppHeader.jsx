import React from 'react';

import './styles/header.css';

// dwie kropki poniewaz musimy wrocic do katalogu wyzej
import pomeranianLogo from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      <div>
        <img src={pomeranianLogo} alt="Logo" />
      </div>
    </header>
  );
}
