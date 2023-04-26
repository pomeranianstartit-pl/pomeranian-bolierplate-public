import { NavLink } from 'react-router-dom';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from './../Components/Icons/CalendarIcon';
import { SettingIcon } from './../Components/Icons/SettingIcon';
import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard" className="aside-row">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="mycv" className="aside-row">
              <PersonalCardIcon className="menu-icon" />
              Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks" className="aside-row">
              <ElementIcon className="menu-icon" />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises" className="aside-row">
              <EditIcon className="menu-icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink to="calendar" className="aside-row">
              <CalendarIcon className="menu-icon" />
              Kalendarz
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink to="settings" className="aside-row">
              <SettingIcon className="menu-icon" />
              Ustawienia
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
