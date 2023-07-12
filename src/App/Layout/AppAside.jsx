import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
           <li>
             <NavLink to="blocks">Bloki</NavLink>
            </li>
           <li>
             <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <NavLink to="CV">CV</NavLink>
            </li>
            <li>
              <NavLink to="Calendar">Calendar</NavLink>
            </li>
    

        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
