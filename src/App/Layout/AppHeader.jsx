import React from 'react';
import { Logo } from '../Components/Logo/Logo';
import './styles/header.css';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <Logo />
      <HeaderMenu />
    </header>
  );
}
