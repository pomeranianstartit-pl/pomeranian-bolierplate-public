import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import {EditIcon} from '../Components/Icons/EditIcon';
import {PersonalCardIcon} from '../Components/Icons/PersonalCardIcon';
export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className='aside-row'>
            <NavLink to="dashboard"> <HouseIcon className='icon' />Dashboard</NavLink>
          </li>
          <li className='aside-row'>
            <NavLink to="blocks"> <ElementIcon className='icon' />Bloki</NavLink>
          </li>
          <li className='aside-row'>
            <NavLink to="exercises"><EditIcon className='icon'/>Ćwiczenia</NavLink>
          </li>
          <li className='aside-row'>
            <NavLink to="cv"><PersonalCardIcon className='icon'/>CV</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
