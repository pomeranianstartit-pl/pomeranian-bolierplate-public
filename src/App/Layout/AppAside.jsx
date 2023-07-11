import { NavLink } from 'react-router-dom';

import './styles/aside.css';

import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { BookIcon } from '../Components/Icons/BookIcon';

export function AppAside() {

  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard" className="aside-row" >
              <div className="svg">
                <HouseIcon />
              </div>
              <h5>Dashboard</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="cv" className="aside-row">
              <div className="svg">
                <PersonalCardIcon />
              </div>
              <h5>Moje CV</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises" className="aside-row">
              <div className="svg">
                <EditIcon />
              </div>
              <h5>Ćwiczenia</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="calendar" className="aside-row">
              <div className="svg">
                <CalendarIcon />
              </div>
              <h5>Kalendarz</h5>
            </NavLink>
          </li>
          <li>
            <NavLink to="blog" className="aside-row">
              <div className="svg">
                <BookIcon />
              </div>
              <h5>Blog</h5>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
