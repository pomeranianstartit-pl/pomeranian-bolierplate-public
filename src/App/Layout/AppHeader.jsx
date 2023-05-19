import React from 'react';

import { Logo } from '../Components/Logo/Logo';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';
import { SettingMenu } from '../../App/Components/Icons/SettingIcon';

import './styles/header.css';

export function AppHeader() {
  return (
    <header>
        <Logo />
        <HeaderMenu />
        {/* Można też tak, jeśli komponent przyjmuje jakąś wartość: <Logo></Logo> */}
    </header>
  );
}
