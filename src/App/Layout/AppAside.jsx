import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { ReactComponent as FaqIcon } from '../Components/Icons/messages.svg';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">
              <HouseIcon />Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="CV">
              <PersonalCardIcon />
              CV
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks">
              <ElementIcon />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <EditIcon />Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink to="Kalendarz">
              <CalendarIcon />Kalendarz
            </NavLink>
          </li>
          <li>
            <NavLink to="Settings">
              <SettingIcon />Ustawienia
            </NavLink>
          </li>
          <li>
            <NavLink to="FAQ">
              <FaqIcon />
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
