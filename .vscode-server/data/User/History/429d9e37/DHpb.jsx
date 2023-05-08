import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
