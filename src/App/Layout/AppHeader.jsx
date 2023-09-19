import React from 'react';

import './styles/header.css';

import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
//import { HeaderMenu } from '../Components/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <PomeranianLogo />
    </header>
  );
}
