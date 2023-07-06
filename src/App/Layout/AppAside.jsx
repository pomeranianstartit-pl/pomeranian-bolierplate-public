import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import {CalendarIcon} from '../Components/Icons/CalendarIcon'
import { HouseIcon } from '../Components/Icons/HouseIcon'


export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <HouseIcon/>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <NavLink to="cv">CV</NavLink>
          </li>
          <li  className="aside-row">
            <CalendarIcon/>
            <NavLink to='calendar'>Calendar</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
