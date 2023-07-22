import React from 'react';

import '../Components/HeaderMenu/styles.css';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

const Logo = () => (
  <a href="/">
    {' '}
    <img
      style={{ width: 50 }}
      src={'http://placekitten.com/500/500'}
      className="logo"
      alt="logo"
    />
  </a>
);

export function AppHeader() {
  return (
    <header>
      <Logo />
      <HeaderMenu />
    </header>
  );
}
