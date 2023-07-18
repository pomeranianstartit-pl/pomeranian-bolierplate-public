import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { MessageIcon } from '../Components/Icons/MessageIcon';
import { BlogIcon } from '../Components/Icons/BlogIcon';

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
            <NavLink to="cv">
              <div className="aside-row">
                <PersonalCardIcon />
                Moje CV
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <div className="aside-row">
                <EditIcon />
                Ćwiczenia
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="calendar">
              <div className="aside-row">
                <CalendarIcon />
                Kalendarz
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks">
              <div className="aside-row">
                <SettingIcon />
                Bloki
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="blog">
              <div className="aside-row">
                <BlogIcon />
                Blog
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="FAQ">
              <div className="aside-row">
                <MessageIcon />
                FAQ
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
