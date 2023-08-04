import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import strzalka from '../Images/strzalka.svg';
import cogwheel from '../Images/setting.svg';
import DominikProfile50 from '../Images/DominikProfile50.jpg';
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
          <img className="img-placeholder" src={DominikProfile50} alt="" />
        </div>
        <div className="user">
          <h3 className='header-name'>Dominik</h3>
          <p>Kursant</p>
        </div>
        <img src={strzalka} alt="" />
      </div>
    </header>
  );
}
