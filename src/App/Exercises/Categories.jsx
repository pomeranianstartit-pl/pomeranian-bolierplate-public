import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2>Categories</h2>

        <NavLink to="html-css">HTML & CSS</NavLink>
        <NavLink to="js">Java Script</NavLink>
        <NavLink to="react">React</NavLink>
        <NavLink to="web-api">Web API</NavLink>
        <NavLink to="async">Asynchrony</NavLink>
        <NavLink to="firebase">Firebase</NavLink>
      
      </div>
    </>
  );
};
