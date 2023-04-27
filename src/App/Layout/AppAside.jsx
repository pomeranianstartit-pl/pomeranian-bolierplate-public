import { NavLink } from 'react-router-dom';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon className="menu-icon" /> Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="Exercises">
              <EditIcon className="menu-icon" /> Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="MyCV">
              <PersonalCardIcon className="menu-icon" /> My CV
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="Calendar">
              <CalendarIcon className="menu-icon" /> Calendar
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
