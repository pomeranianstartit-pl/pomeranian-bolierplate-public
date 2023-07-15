import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../../App/Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../../App/Components/Icons/PersonalCardIcon';
import { HouseIcon } from '../../App/Components/Icons/HouseIcon';
import { EditIcon } from '../../App/Components/Icons/EditIcon';
import { ElementIcon } from '../../App/Components/Icons/ElementIcon';
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
              <HouseIcon className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="cv">
              <PersonalCardIcon className="icon" />
              <span>Moje CV</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks">
              <ElementIcon className="icon" />
              <span>Bloki</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <EditIcon className="icon" />
              <span>Ćwiczenia</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="calendar">
              <CalendarIcon className="icon" />
              <span>Kalendarz</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="blog">
              <BookIcon className="icon" />
              <span>Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="faq">
              <FaqIcon className="icon" />
              <span>FAQ</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
