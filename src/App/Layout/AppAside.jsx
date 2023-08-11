import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { MessageIcon } from '../Components/Icons/MessageIcon';
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
            <NavLink to="blocks">
              <div className="aside-row">
                <ElementIcon />
                Bloki
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
            <NavLink to="cv">
              <div className="aside-row">
                <PersonalCardIcon />
                CV
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
            <NavLink to="Blog">
              <div className="aside-row">
                <BookIcon />
                Blog
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="Faq">
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
