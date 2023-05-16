import { NavLink } from 'react-router-dom';
import  {CalendarIcon}  from '../Components/Icons/CalendarIcon';
import {ElementIcon} from '../Components/Icons/ElementIcon';
import {HouseIcon} from '../Components/Icons/HouseIcon';
import {PersonalCardIcon} from '../Components/Icons/PersonalCardIcon';
import {EditIcon} from '../Components/Icons/EditIcon';
import {SettingIcon} from '../Components/Icons/SettingIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <HouseIcon/>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
          <PersonalCardIcon/>
          <NavLink to="cv">CV</NavLink>
          </li>
          <li>
            <ElementIcon/>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
          <li> 
          <CalendarIcon/>
          <NavLink to="calendar">Calendar</NavLink>
          </li>
          <li>
            <SettingIcon/>
          <NavLink to="settings">Settings</NavLink>
          </li>
          <li>
            <EditIcon/>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
