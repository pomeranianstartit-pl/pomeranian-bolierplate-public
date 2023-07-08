import { NavLink } from 'react-router-dom';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <HouseIcon></HouseIcon>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <ElementIcon></ElementIcon>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <EditIcon></EditIcon>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <CalendarIcon></CalendarIcon>
            <NavLink to="/">Kalendarz</NavLink>
          </li>
          <li>
            <PersonalCardIcon></PersonalCardIcon>
            <NavLink to="/">Moje CV</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
