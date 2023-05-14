import { NavLink } from 'react-router-dom';
import  {CalendarIcon}  from '../Components/Icons/CalendarIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li><NavLink to="cv">CV</NavLink></li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <CalendarIcon to="calendar">CalendarIcon</CalendarIcon>
          <li>
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
          <li>
          <CalendarIcon to="calendar">Calendar</CalendarIcon>
          </li>
          <li>
          <NavLink to="settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
