import React from 'react';

import './styles/header.css';
import '../Components/HeaderMenu/styles.css';
import { Logo } from '../Components/Logo/Logo';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

// const LogoNew = () => (
//   <a href="/">
//     {' '}
//     <img
//       style={{ width: 50 }}
//       src={'http://placekitten.com/500/500'}
//       className="logo"
//       alt="logo"
//     />
//   </a>
// );

export function AppHeader() {
  return (
    <header>
      {/* <LogoNew /> */}
      <Logo />
      <HeaderMenu />
    </header>
  );
}
