import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2 className="special_class_h2">Kategorie</h2>

        <NavLink to="html-css">HTML & CSS - lista ćwiczeń</NavLink>
        <NavLink to="js">JS - lista ćwiczeń</NavLink>
        <NavLink to="react">React - lista ćwiczeń</NavLink>
        <NavLink to="web-api">Web API - lista ćwiczeń</NavLink>
        <NavLink to="async">Asynchroniczność - lista ćwiczeń</NavLink>
      </div>
    </>
  );
};
