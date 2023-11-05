import { NavLink } from 'react-router-dom';

import { HouseIcon } from '../Components/Icons/HouseIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { BookSavedIcon } from '../Components/Icons/BookSavedIcon';
import { MessageIcon } from '../Components/Icons/MessageIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row ">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li className="aside-row ">
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row ">
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row ">
            <PersonalCardIcon />
            <NavLink to="cv">CV</NavLink>
          </li>

          <li className="aside-row ">
            <CalendarIcon />
            <NavLink to="calendar">Calendar</NavLink>
          </li>
          <li className="aside-row ">
            <SettingIcon />
            <NavLink to="settings">Settings</NavLink>
          </li>
          <li className="aside-row">
            <BookSavedIcon />
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li className="aside-row">
            <MessageIcon />
            <NavLink to="faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      {/* <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p> */}
    </aside>
  );
}
