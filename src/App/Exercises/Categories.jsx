import React from 'react';
import { NavLink } from 'react-router-dom';
import html5Icon from '../Images/TechStack/html5.svg';
import jsIcon from '../Images/TechStack/js.svg';
import reactIcon from '../Images/TechStack/react.svg';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2>Kategorie</h2>

        <NavLink className="exercises-category" to="html-css">
          <img
            src={html5Icon}
            alt="Ćwiczenia HTML & CSS"
            className="category-icon"
          />
          HTML & CSS - lista ćwiczeń
        </NavLink>
        <NavLink className="exercises-category" to="js">
          <img src={jsIcon} alt="Ćwiczenia JS" className="category-icon" />
          JS - lista ćwiczeń
        </NavLink>
        <NavLink className="exercises-category" to="react">
          <img
            src={reactIcon}
            alt="Ćwiczenia React"
            className="category-icon"
          />
          React - lista ćwiczeń
        </NavLink>
        {/* <NavLink to="web-api">Web API - lista ćwiczeń</NavLink>
        <NavLink to="async">Asynchroniczność - lista ćwiczeń</NavLink>    ////these lines are hidden due to course unclean exercises categorization
        <NavLink to="firebase">Firebase - lista ćwiczeń</NavLink> */}
      </div>
    </>
  );
};
