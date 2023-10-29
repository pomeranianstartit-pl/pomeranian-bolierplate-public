import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h3>Kategorie</h3>

        <NavLink to="html-css">HTML & CSS - lista ćwiczeń</NavLink>
        <NavLink to="js">JS - lista ćwiczeń</NavLink>
        <NavLink to="react">React - lista ćwiczeń</NavLink>
        <NavLink to="web-api">Web API - lista ćwiczeń</NavLink>
        <NavLink to="async">Asynchroniczność - lista ćwiczeń</NavLink>
        <NavLink to="firebase">Firebase - lista ćwiczeń</NavLink>
      </div>
    </>
  );
};
