import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row">
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row">
            <PersonalCardIcon />
            <NavLink to="CV">CV</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="Calendar">Calendar</NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="Blog">Blog</NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
