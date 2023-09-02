import React from 'react';

import './styles/header.css';

// 1. Import SVG as React component
import { ReactComponent as Logo } from '../Images/start-it-logo.svg';
import { ReactComponent as Setting } from '../Images/setting.svg';
import { ReactComponent as Toggle } from '../Images/toggle-arrow.svg';

// 2. Import SVG as URL
// import logo from '../Images/start-it-logo.svg';

export function AppHeader() {
  return (
    <header>
      <div>
        {/* 1. sposób */}
        <div className="Logo">
          <Logo />
        </div>
        <div className="Setting">
          <Setting />
        </div>
        <div className="Ellipse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
          >
            <circle cx="24.5" cy="24.5" r="24.5" fill="#C8CBD1" />
          </svg>
        </div>
        <div className="Name">
          <span>Krzysztof</span>
          <span>kursant</span>
        </div>
        <div className="Toggle">
          <Toggle />
        </div>

        {/* 1. sposób */}
        {/* <img src={logo} /> */}
      </div>
    </header>
  );
}
