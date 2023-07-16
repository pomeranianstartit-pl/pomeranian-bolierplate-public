import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">
              <HouseIcon className="icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="cv">
              <PersonalCardIcon className="icon" /> Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <EditIcon className="icon" /> Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks">
              <ElementIcon className="icon" /> Bloki
            </NavLink>
          </li>
          <li>
            <NavLink to="calendar">
              <CalendarIcon className="icon" /> Kalendarz
            </NavLink>
          </li>
          <li>
            <NavLink to="blog">
              <BookIcon className="icon" /> Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="faq">
              <FaqIcon className="icon" /> FAQ
            </NavLink>
          </li>
          <hr></hr>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
