import { NavLink } from 'react-router-dom';

import './styles/aside.css';

import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard"><HouseIcon className="menu-icon"/>Dashboard</NavLink>
          </li>
          <li>
            
            <NavLink className="aside-row" to="CV"><PersonalCardIcon className="menu-icon"/>My CV</NavLink>
          </li>
          
         {/* <li>
            <NavLink className="aside-row" to="blocks"><ElementIcon className="menu-icon"/>Blocks</NavLink>
          </li> */}
          
          <li>

            <NavLink className="aside-row" to="exercises"><EditIcon className="menu-icon"/>Exercises</NavLink>
          </li>
          <li>
            
            <NavLink className="aside-row" to="calendar"><CalendarIcon className="menu-icon"/>Calendar</NavLink>
          </li>

          <li>
            
            <NavLink className="aside-row" to="blog"><SettingIcon className="menu-icon"/>Blog</NavLink>
          </li>

          <li>
            
            <NavLink className="aside-row" to="faq"><SettingIcon className="menu-icon"/>FAQ</NavLink>
          </li>

          <li>
            
            <NavLink style={{ marginTop: '40px' }} className="aside-row" to="settings"><SettingIcon className="menu-icon"/>Settings</NavLink>
          </li>
          </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
