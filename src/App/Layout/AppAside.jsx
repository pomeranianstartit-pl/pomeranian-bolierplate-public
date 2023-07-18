import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { BlogIcon } from '../Components/Icons/BlogIcon';
import { MessegeIcon } from '../Components/Icons/MessegeIcon';
import { Faq2 } from '../Components/Icons/Faq2';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li> <HouseIcon></HouseIcon>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>     <PersonalCardIcon></PersonalCardIcon>
            <NavLink to="cv">Moje cv</NavLink>
          </li>

          <li><ElementIcon></ElementIcon>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>     <EditIcon></EditIcon>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>     <CalendarIcon></CalendarIcon>
            <NavLink to="Kalendar">Kalendarz</NavLink>
          </li>
          <li><BlogIcon></BlogIcon>
            <NavLink to="Blog">Blog</NavLink>
          </li>
          <li><MessegeIcon></MessegeIcon>
            <NavLink to="Faq">FAQ</NavLink>
          </li>
          <li><Faq2></Faq2>
            <NavLink to="Faq2">FAQ2</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
