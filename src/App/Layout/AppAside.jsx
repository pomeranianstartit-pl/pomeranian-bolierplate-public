import { NavLink } from 'react-router-dom';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { BookIcon } from '../Components/Icons/BookIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <HouseIcon className="icon" />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <PersonalCardIcon className="icon" />
            <NavLink to="CV">Moje CV</NavLink>
          </li>
          <li>
            <ElementIcon className="icon" />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <EditIcon className="icon" />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <CalendarIcon className="icon" />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <BookIcon className="icon" />
            <NavLink to="blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
