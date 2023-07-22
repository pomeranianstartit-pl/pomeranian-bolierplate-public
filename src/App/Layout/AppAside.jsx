import { NavLink } from 'react-router-dom';

import './styles/aside.css';

import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <div className="icon">
              <HouseIcon />
            </div>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <div className="icon">
              <PersonalCardIcon />
            </div>
            <NavLink to="CV">Moje CV</NavLink>
          </li>
          <li>
            <div className="icon">
              <ElementIcon />
            </div>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <div className="icon">
              <EditIcon />
            </div>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <div className="icon">
              <CalendarIcon />
            </div>
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            {/* <ElementIcon /> */}
            <NavLink to="blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
