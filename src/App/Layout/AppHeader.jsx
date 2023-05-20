import React from 'react';

import './styles/header.css';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

// import { SettingIcon } from '../Icons/SettingIcon';

const Logo = () => (
  <a href="/">
    {' '}
    <img
      style={{ width: 50,
      height: 50}}
      src={'http://placekitten.com/500/500'}
      className="logo"
      alt="logo"
    />{' '}
  </a>
);
export function AppHeader() {
  return (
    <header>
      {' '}
      <Logo /> <HeaderMenu />{' '}
    </header>
  );
}