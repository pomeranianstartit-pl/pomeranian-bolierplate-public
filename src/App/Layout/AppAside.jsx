import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <div className="aside-row">
              <NavLink to="dashboard">
                <HouseIcon />
                Dashboard
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <NavLink to="cv">CV</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="calendar">Calendar</NavLink>
          </li>
          <li className="aside-row">
            <FaqIcon />
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
