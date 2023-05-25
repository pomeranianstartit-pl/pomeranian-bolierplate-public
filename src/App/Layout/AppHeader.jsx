import React from 'react';
import { Logo } from '../Components/Logo/Logo';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';
import './styles/header.css';

export function AppHeader() {
  return (
    <header>
      <Logo />
      <HeaderMenu />
    </header>
  );
}
