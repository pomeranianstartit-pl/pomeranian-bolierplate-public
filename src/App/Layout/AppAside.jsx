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
            <HouseIcon className="icon" />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <PersonalCardIcon className="icon" />
            <NavLink to="cv">Moje CV</NavLink>
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
          <li>
            <FaqIcon className="icon" />
            <NavLink to="faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
