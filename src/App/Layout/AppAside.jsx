import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { FAQIcon } from '../Components/Icons/FaqIcon';
export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <NavLink to="dashboard">
              <HouseIcon className="icon" />
              <b>Dashboard</b>
            </NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="cv">
              <PersonalCardIcon className="icon" />
              <b>Moje CV</b>
            </NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="blocks">
              {' '}
              <ElementIcon className="icon" />
              <b>Bloki</b>
            </NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="exercises">
              <EditIcon className="icon" />
              <b>Ćwiczenia</b>
            </NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="Calendar">
              <CalendarIcon className="icon" />
              <b>Kalendarz</b>
            </NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="Blog">
              <CalendarIcon className="icon" />
              <b>Blog</b>
            </NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="FAQ">
              <FAQIcon className="icon" />
              <b>FAQ</b>
            </NavLink>
          </li>
          <br />
          <hr color="grey" />
          <br />
          <li className="aside-row">
            <NavLink to="Settings" className="black">
              <SettingIcon className="icon" />
              <b>Ustawienia</b>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
