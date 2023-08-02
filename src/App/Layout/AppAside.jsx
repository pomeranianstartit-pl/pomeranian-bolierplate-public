import { NavLink } from 'react-router-dom';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
// import { ElementIcon } from '../Components/Icons/ElementIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';

import './styles/aside.css';
import { useState } from 'react';

export function AppAside() {
  // const [isTextClicked, setIsTextClicked] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { id: 1, link: 'dashboard', icon: <HouseIcon /> },
    { id: 2, link: 'cv', icon: <PersonalCardIcon /> },
    { id: 3, link: 'exercises', icon: <EditIcon /> },
    { id: 4, link: 'calendar', icon: <CalendarIcon /> },
    { id: 5, link: 'faq', icon: <FaqIcon /> },
    { id: 6, link: 'settings', icon: <SettingIcon /> },
  ];

  const handleClick = (linkId) => {
    setActiveLink(linkId);
  };
  return (
    <aside>
      <nav>
        <ul>
          {links.map((link) => (
            <li>
              <div
                className={
                  activeLink === link.id ? 'svg-icon-clicked' : 'svg-icon'
                }
              >
                {link.icon}
              </div>
              <NavLink
                key={link.id}
                onClick={() => handleClick(link.id)}
                to={link.link}
                style={{ textTransform: 'capitalize' }}
              >
                {link.link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* <ul>
          <li>
            <HouseIcon
              className={isTextClicked ? 'svg-icon-clicked' : 'svg-icon'}
            />
            <NavLink onClick={() => setIsTextClicked(true)} to="dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <PersonalCardIcon
              className={isTextClicked ? 'svg-icon-clicked' : 'svg-icon'}
            />
            <NavLink onClick={() => setIsTextClicked(true)} to="cv">
              Moje CV
            </NavLink>
          </li>
          <li>
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <EditIcon
              className={isTextClicked ? 'svg-icon-clicked' : 'svg-icon'}
            />
            <NavLink onClick={() => setIsTextClicked(true)} to="exercises">
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <CalendarIcon
              className={isTextClicked ? 'svg-icon-clicked' : 'svg-icon'}
            />
            <NavLink onClick={() => setIsTextClicked(true)} to="calendar">
              Kalendarz
            </NavLink>
          </li>
          <li>
            <FaqIcon
              className={isTextClicked ? 'svg-icon-clicked' : 'svg-icon'}
            />
            <NavLink onClick={() => setIsTextClicked(true)} to="faq">
              FaQ
            </NavLink>
          </li>
          <hr />
          <li>
            <SettingIcon
              className={isTextClicked ? 'svg-icon-clicked' : 'svg-icon'}
            />
            <NavLink onClick={() => setIsTextClicked(true)} to="settings">
              Ustawienia
            </NavLink>
          </li>
        </ul> */}
      </nav>
    </aside>
  );
}
