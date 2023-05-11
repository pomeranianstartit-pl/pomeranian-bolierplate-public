import { NavLink } from 'react-router-dom';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { Faq } from '../Components/Icons/Faq';

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
            <NavLink className="aside-row" to="my-cv">
              <PersonalCardIcon className="menu-icon" /> Moje cv
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon className="menu-icon" /> Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" /> Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="faq">
              <Faq className="menu-icon" /> FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
