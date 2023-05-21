import React from 'react';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';

export function AppHeader() {
  return (
    <header>
      <Logo />
      <HeaderMenu />
    </header>
  );
}
