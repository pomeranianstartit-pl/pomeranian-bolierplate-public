import { Link } from 'react-router-dom';
import React from 'react';
import { ChangeBackgroundColorApp } from './ChangeBackgroundColorApp';

export const ChangeBackgroundColor = () => {
  return (
    <div>
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;</p>
        <Link to="/projects">Projekty</Link>
        <p>&nbsp;&gt;&nbsp;Kolor tła</p>
      </div>
      <h1>Zmiana koloru tła</h1>
      <ChangeBackgroundColorApp />
    </div>
  );
};
