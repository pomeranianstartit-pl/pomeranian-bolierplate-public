import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li><HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li><PersonalCardIcon />
            <NavLink to="cv">Moje cv</NavLink>
          </li>
          <li><ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li><CalendarIcon />
            <NavLink to="calendar">Mój kalendarz</NavLink>
          </li>
          <li><EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
