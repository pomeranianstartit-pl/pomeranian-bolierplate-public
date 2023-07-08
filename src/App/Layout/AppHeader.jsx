import React from 'react';
import { Logo } from '../Components/Logo';
import { Link } from 'react-router-dom';

import './styles/header.css';

export function AppHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
