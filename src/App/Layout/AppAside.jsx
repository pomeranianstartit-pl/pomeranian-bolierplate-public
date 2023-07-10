import { NavLink } from 'react-router-dom';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="navlink" to="dashboard">
              <HouseIcon />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="blocks">
              <ElementIcon />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="exercises">
              <EditIcon /> Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="blog">
              <PersonalCardIcon /> Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
