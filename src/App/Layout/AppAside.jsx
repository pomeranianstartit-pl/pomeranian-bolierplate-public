import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';
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
            <NavLink className="aside-row" to="my-cv">
              <PersonalCardIcon className="menu-icon" />
              Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon className="menu-icon" /> Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" /> Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="calendar">
              <CalendarIcon className="menu-icon" />
              Kalendarz
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="faq">
              <FAQIcon className="menu-icon" />
              FAQ
            </NavLink>
          </li>
          <hr></hr>
          <li>
            <NavLink className="aside-row" to="settings">
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
