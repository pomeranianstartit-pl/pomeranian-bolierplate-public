import { NavLink } from 'react-router-dom';

import './styles/aside.css';

import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <HouseIcon className="menu-icon"/>{' '}
            <NavLink className="aside-row" to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <PersonalCardIcon className="menu-icon"/>{' '}
            <NavLink className="aside-row" to="CV">Moje CV</NavLink>
          </li>
          <li>
            <ElementIcon className="menu-icon"/>{' '}
            <NavLink className="aside-row" to="blocks">Bloki</NavLink>
          </li>
          <li>
            <EditIcon className="menu-icon"/>{' '}
            <NavLink className="aside-row" to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <CalendarIcon className="menu-icon"/>{' '}
            <NavLink className="aside-row" to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <SettingIcon className="menu-icon"/>{' '}
            <NavLink className="aside-row" to="settings">Ustawienia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
