import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import arrowDown from '../Images/toggle-arrow.svg';
import cogwheel from '../Images/setting.svg';

export function AppHeader() {
  return (
    <header className="navigation">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="menu">
        <button
          className="settings"
          onClick={() => {
            console.log('Clicked cogwheel');
          }}
        >
          <img src={cogwheel} alt="" />
        </button>
        <div className="profile-picture">
          <div className="place-holder"></div>
        </div>
        <div className="user-details">
          <p>Adrian Bakalarz</p>
          <p>kursant</p>
        </div>
        <button
          className="dropdown-menu"
          onClick={() => {
            console.log('Clicked arrowdown');
          }}
        >
          <img src={arrowDown} alt="" />
        </button>
      </div>
    </header>
  );
}
