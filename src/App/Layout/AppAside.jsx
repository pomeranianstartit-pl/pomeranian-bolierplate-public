import { NavLink, useLocation } from 'react-router-dom';

import './styles/aside.css';

import { HouseIcon } from '../Components/Icons/HouseIcon'; 
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { BookIcon } from '../Components/Icons/BookIcon';

export function AppAside() {

  const location = useLocation();

  return (
    <aside>
      <nav>
        <ul>
          <li className={`aside-row ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li className="aside-row">
            <PersonalCardIcon />
            <NavLink to="cv">Moje CV</NavLink>
          </li>
          <li className="aside-row">
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li className="aside-row">
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row">
            <BookIcon />
            <NavLink to="blog">Blog</NavLink>
          </li>
          <hr />
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}