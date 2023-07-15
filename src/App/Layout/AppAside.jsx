import { NavLink } from 'react-router-dom';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <HouseIcon className="icon"></HouseIcon>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <ElementIcon className="icon"></ElementIcon>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <EditIcon className="icon"></EditIcon>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <NavLink to="Calendar">Kalendarz</NavLink>
            <CalendarIcon className="icon"></CalendarIcon>
          </li>
          <li>
            <PersonalCardIcon className="icon" />
            <NavLink to="CV">Moje CV</NavLink>
          </li>
          <li>
            <NavLink to="Blog">
              <BookIcon className="icon" />
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
