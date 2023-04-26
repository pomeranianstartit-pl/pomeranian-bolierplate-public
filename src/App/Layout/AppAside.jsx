import { NavLink } from 'react-router-dom';
import {HouseIcon} from '../Components/Icons/HouseIcon';
import {ElementIcon} from '../Components/Icons/ElementIcon';
import {EditIcon} from '../Components/Icons/EditIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
          <NavLink className="aside-row" to="dashboard">
          <HouseIcon className="menu-icon" /> Dashboard
          </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="bloki">
              <ElementIcon className="menu-icon" /> Bloki
          </li>
          <li>
          <NavLink className="aside-row" to="exercises">
              <ElementIcon className="menu-icon" /> Ćwiczenia
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
