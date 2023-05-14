import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import {CalendarIcon} from '../Components/Icons/CalendarIcon';
import {PersonalCardIcon} from '../Components/Icons/PersonalCardIcon';
import {ElementIcon} from '../Components/Icons/ElementIcon';
import {HouseIcon} from '../Components/Icons/HouseIcon';
import {EditIcon} from '../Components/Icons/EditIcon';
import {SettingIcon} from '../Components/Icons/SettingIcon';


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
            <NavLink to="CV">CV</NavLink>
          </li>
          <li>
            <ElementIcon/>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <EditIcon/>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li> <CalendarIcon/>
            <NavLink to="Kalendarz">Kalendarz</NavLink>
          </li>
          <li>
            <SettingIcon/>
            <NavLink to="Settings">Ustawienia</NavLink>
          </li>
          <li>
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
