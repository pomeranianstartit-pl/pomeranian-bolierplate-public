import { NavLink } from 'react-router-dom';
import { HouseIcon } from './../Components/Icons/HouseIcon.jsx';
import { ElementIcon } from './../Components/Icons/ElementIcon.jsx';
import { EditIcon } from './../Components/Icons/EditIcon.jsx';
import { PersonalCardIcon } from './../Components/Icons/PersonalCardIcon.jsx';
import { SettingIcon } from './../Components/Icons/SettingIcon.jsx';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon className="menu-icon" />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="Blog">
              <EditIcon className="menu-icon" />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="MyCV">
              <PersonalCardIcon className="menu-icon" />
              Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="Settings">
              <SettingIcon className="menu-icon" />
              Ustawienia
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}></p>
    </aside>
  );
}
