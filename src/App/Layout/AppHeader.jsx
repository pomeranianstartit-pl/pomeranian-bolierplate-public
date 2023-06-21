import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import strzalka from '../Images/strzalka.svg';
import cogwheel from '../Images/setting.svg';

export function AppHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="menu">
        <button
          className="settings"
          onClick={() => {
            console.log('button');
          }}
        >
          <img src={cogwheel} alt="" />
        </button>

        <div className="profile-picture">
          <div className="placeholder" />
        </div>
        <div className="user">
          <h3>Dominik</h3>
          <p>Kursant</p>
        </div>
        <img src={strzalka} alt="" />
      </div>
    </header>
  );
}
