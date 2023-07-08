import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../../App/Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../../App/Components/Icons/PersonalCardIcon';
import { HouseIcon } from '../../App/Components/Icons/HouseIcon';
import { EditIcon } from '../../App/Components/Icons/EditIcon';
import { ElementIcon } from '../../App/Components/Icons/ElementIcon';
import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <PersonalCardIcon />
            <NavLink to="cv">Moje CV</NavLink>
          </li>
          <li>
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <CalendarIcon />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
