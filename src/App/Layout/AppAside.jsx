import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from './../Components/Icons/HouseIcon';
import { ElementIcon } from './../Components/Icons/ElementIcon';
import { EditIcon } from './../Components/Icons/EditIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" />Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="myCV">Moje cv</NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">Bloki
              <ElementIcon />Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon />
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="callendar">Kalendarz</NavLink>
          </li>
          <br />
          <li>
            <NavLink className="aside-row" to="settings">Ustawienia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
