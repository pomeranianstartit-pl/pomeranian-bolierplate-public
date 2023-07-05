import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { EditIcon } from '../Components//Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { BookIcon } from '../Components/Icons/BookIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">
              <div className="aside-row">
                <HouseIcon />
                Dashboard
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="CV">
              <PersonalCardIcon />
              Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <EditIcon />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink to="Calendar">
              <CalendarIcon />
              Kalendarz
            </NavLink>
          </li>
          <li>
            <NavLink to="Blog">
              <BookIcon />
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
