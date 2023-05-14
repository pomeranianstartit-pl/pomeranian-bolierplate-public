import { NavLink } from 'react-router-dom';
import { MessageIcon as Message } from '../Components/Icons/MessageIcon';
import { HouseIcon as House } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon as PersonalCard } from '../Components/Icons/PersonalCardIcon';
import { ElementIcon as Element } from '../Components/Icons/ElementIcon';
import { EditIcon as Edit } from '../Components/Icons/EditIcon';
import { CalendarIcon as Calendar } from '../Components/Icons/CalendarIcon';
import { SettingIcon as Setting } from '../Components/Icons/SettingIcon';


import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <House />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <PersonalCard />
            <NavLink to="cv">Moje cv</NavLink>
          </li>
          <li>
            <Element />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <Edit />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <Calendar />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li>
            <Setting />
            <NavLink to="settings">Ustawienia</NavLink>
          </li>
          <li>
            <Message />
            <NavLink to="faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
