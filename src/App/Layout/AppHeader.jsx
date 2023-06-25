import React from 'react';

import arrowDown from '../Images/toggle-arrow.svg';
import startItLogo from '../Images/start-it-logo.svg';
import cogwheel from '../Images/setting.svg';

import { Link } from 'react-router-dom';

import './styles/header.css';

export function AppHeader() {
  return (
    <header className="navigation">
      <div>
        <Link to="/">
          <img src={startItLogo} className="logo" alt="" srcset="" />
        </Link>
      </div>
      <div className="menu">
        <button
          className="settings"
          onClick={() => {
            console.log('Clicked cogwheel');
          }}
        >
          <img src={cogwheel} alt="" srcset="" />
        </button>
        <div className="profile-picture">
          <div className="placeholder" />
        </div>
        <div className="user-details">
          <p>Krzysztof Truszkowski</p>
          <p>kursant</p>
        </div>
        <button
          onClick={() => {
            console.log('Clicked the arrow');
          }}
          className="dropdown-menu"
        >
          <img src={arrowDown} alt="" srcset="" />
        </button>
      </div>
    </header>
  );
}
