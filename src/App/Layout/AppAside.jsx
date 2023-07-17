import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';


export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">
              <div className="aside-row">
                <HouseIcon />
                Dashboard
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="CV">
              <div className="aside-row">
                <PersonalCardIcon />
                CV
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <div className='aside-row'>
                <EditIcon />
                Ćwiczenia
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="Calendar">
              <div className="aside-row">
                <CalendarIcon />
                Kalendarz
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
