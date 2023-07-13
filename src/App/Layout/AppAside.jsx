import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';

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
                {/* <span>CV</span> Propozycja */}
                CV
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <div className="aside-row">
                <EditIcon />
                Ćwiczenia
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="Calendar">
              <div className="aside-row">
                <CalendarIcon />
                <span>Kalendarz</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks">
              <div className="aside-row">
                <ElementIcon />
                Blocks
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="blog">
              <div className="aside-row">
                <ElementIcon />
                Blog
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
