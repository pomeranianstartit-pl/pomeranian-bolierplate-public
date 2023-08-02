import React from 'react';
import startItLogo from '../Images/start-it-logo.svg';
import arrowDown from '../Images/arrowDown.svg';
import cogwheel from '../Images/setting.svg';
import { Link } from "react-router-dom";
import './styles/header.css';

export function AppHeader() {
  return (
    <header className='navigation'>
      <div>
        <Link to="/">
          <img src={startItLogo} className="logo" alt="" />
        </Link>
      </div>
      <div className='menu'>
        <button className="settings" onClick={() => { console.log('Clicked cogwheel'); }}>
          <img src={cogwheel} alt="" />
        </button>
        <div className='profile-picture'>
          <div className='placeholder' />
        </div>
        <div className='user-details'> <p>Klaudia Stefaniak</p>
        <p>Kursantka</p>
        </div>
        <button className='dropdown-menu' onClick={() => { console.log('Clicked Arrow');}}>
          <img src={arrowDown} alt="" />
        </button>
      </div>
    </header>
  )
}
