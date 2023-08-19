import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          {/* <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li> */}
          <li className="aside-row">
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row">
            <PersonalCardIcon />
            <NavLink to="cv">Moje CV</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
