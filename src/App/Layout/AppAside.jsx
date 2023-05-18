import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { ReactComponent as Messages } from '../Components/Icons/Messages.svg';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="cv">CV</NavLink>
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <CalendarIcon />
            <NavLink to="kalendarz">Kalendarz</NavLink>
          </li>
          <li>
            <SettingIcon />
            <NavLink to="settings">Ustawienia</NavLink>
          </li>
          <li>
            <Messages />
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
