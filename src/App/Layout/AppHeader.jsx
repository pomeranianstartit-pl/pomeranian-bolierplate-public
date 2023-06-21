import React from 'react';

import './styles/header.css';

import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import arrowDown from '../Images/toggle-arrow.svg';
import cogwheel from '../Images/setting.svg';

export function AppHeader() {
  return (
    <header className="logo">
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu">
        <button
          className="settings"
          onClick={() => {
            console.log('Clicked-cogwheel');
          }}
        >
          <img src={cogwheel} />
        </button>
        <div className="user-menu">
          <div className="profile-picture">
            <div className="placeholder"></div>
          </div>
          <div className="user-details">
            <p className="name">Imię</p>
            <p className="position">kursant</p>
          </div>
          <button
            className="toggle-arrow"
            onClick={() => {
              console.log('Clicked the arrow');
            }}
          >
            <img src={arrowDown} />
          </button>
        </div>
      </div>
    </header>
  );
}
