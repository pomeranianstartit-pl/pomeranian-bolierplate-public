import React, { useState } from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/logo';
import { Link } from 'react-router-dom';
import arrowDown from '../Images/toggle-arrow.svg'; //inne importy
import cogWheel from '../Images/setting.svg';
import menu from '../Images/menu.svg'; // jesli zmieniać kolor to zapisac jako funkcję
import user from '../Images/user.svg';
import smallProfile from '../Images/prof2m.jpg';

export function AppHeader({ toggleMenuVisibility }) {
  const [userIsVisible, setUserIsVisible] = useState(false);
  console.log('userIsVisible:', userIsVisible);
  return (
    <header>
      <button className="menuButton" onClick={toggleMenuVisibility}>
        <img src={menu} alt="menu" />
      </button>
      <Link to="/">
        <Logo />
      </Link>
      <button
        className="menuButton"
        onClick={() => setUserIsVisible(!userIsVisible)}
      >
        <img src={user} alt="user" />
      </button>
      <div className={`menu ${userIsVisible ? 'showMenu' : ''}`}>
        <button
          className="settings"
          onClick={() => {
            console.log('ClickedSettings');
          }}
        >
          <img src={cogWheel} alt="ustawienia" srcSet="" />
        </button>
        <div className="profile-picture">
          <img
            className="profile-picture-img"
            src={smallProfile}
            alt="miniatura zdjęcia Profilowego"
          />
        </div>
        <div className="header-title">
          <div className="user">
            <h3>Adam</h3>
            <br />
            kursant
          </div>
        </div>
        <button
          className="dropdown"
          onClick={() => {
            console.log('ClickedDropdown');
          }}
        >
          <img src={arrowDown} alt="rozwiń" srcSet="" />
        </button>
      </div>
    </header>
  );
}
