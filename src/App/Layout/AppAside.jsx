import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';

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
            <NavLink to="blocks">
              <div className="aside-row">
                <ElementIcon />
                Bloki
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="exercises" >
              <div className="aside-row">
                <EditIcon />
                Ćwiczenia
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="cv" >
              <div className="aside-row">
                <PersonalCardIcon />
                CV
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="Calendar">Kalendarz</NavLink>
            </li>

            <li>
            <NavLink to="Blog">Blog</NavLink>
          </li>
        
      </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}