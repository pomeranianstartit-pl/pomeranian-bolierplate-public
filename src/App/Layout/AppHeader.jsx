import React from 'react';

import './styles/header.css';

// 1. Import SVG as React component
import { ReactComponent as Logo } from '../Images/start-it-logo.svg';

// 2. Import SVG as URL
// import logo from '../Images/start-it-logo.svg';
import HeaderMenu from '../Components/HeaderMenu';

import setting from '../Images/setting.svg';

const icons = [
  {
    key: 'Notification',
    icon: setting,
  },
  {
    key: 'Settings',
    icon: setting,
  },
];

export function AppHeader() {
  return (
    <header>
      {/* 1. sposób */}
      <div className="header-content">
        <Logo />
        {/* 1. sposób */}
        {/* <img src={logo} alt="Logo" /> */}
        <HeaderMenu icons={icons} />
        {/* 
            HeaderRight
              HeaderIcons
              HeaderPanel
        */}
      </div>
    </header>
  );
}
