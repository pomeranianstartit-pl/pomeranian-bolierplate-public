import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from './../Components/Icons/HouseIcon';
import { ElementIcon } from './../Components/Icons/ElementIcon';
import { EditIcon } from './../Components/Icons/EditIcon';
import { CalendarIcon } from './../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from './../Components/Icons/PersonalCardIcon';
import { SettingIcon } from './../Components/Icons/SettingIcon';
import BlogIcon from '../Components/Icons/BlogIcon.svg';
import FaqIcon from '../Components/Icons/FaqIcon.svg';
import CodeIcon from '../Images/tiles/code.svg';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="CV">
              <PersonalCardIcon className="menu-icon" />
              My CV
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" />
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="calendar">
              <CalendarIcon className="menu-icon" />
              Calendar
            </NavLink>
          </li>
          <li>
          <NavLink className="aside-row" to="blog">
              <img
                src={BlogIcon}
                className="menu-icon"
                alt="Blog"
                style={{ width: '23px', height: '23px' }}
              />
              Blog
            </NavLink>
          </li>
          <li>
          <NavLink className="aside-row" to="tech">
              <img
                src={CodeIcon}
                className="menu-icon"
                alt="Tech"
                style={{ width: '23px', height: '23px' }}
              />
              Tech stack
            </NavLink>
          </li>
          <li>
          <NavLink className="aside-row" to="faq">
              <img
                src={FaqIcon}
                className="menu-icon"
                alt="FAQ"
                style={{ width: '23px', height: '23px' }}
              />
              FAQ
            </NavLink>
          </li>
              
        </ul>
      </nav>
    </aside>
  );
}