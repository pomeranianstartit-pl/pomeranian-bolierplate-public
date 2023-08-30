import { NavLink } from 'react-router-dom';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';
import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">
              <HouseIcon className="icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks">
              <ElementIcon className="icon" />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <EditIcon className="icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink to="Calendar">
              <CalendarIcon className="icon" />
              Kalendarz
            </NavLink>
          </li>
          <li>
            <NavLink to="CV">
              <PersonalCardIcon className="icon" />
              Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink to="Blog">
              <BookIcon className="icon" />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="FAQ">
              <FAQIcon className="icon" />
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
