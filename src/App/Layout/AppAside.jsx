import { NavLink } from 'react-router-dom';
// import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
// import { ElementIcon } from '../Components/Icons/ElementIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';

import './styles/aside.css';
import { Folder } from '../Components/Icons/Folder';
import { User } from '../Components/Icons/User';
// import { useState } from 'react';

export function AppAside() {
  // const [isTextClicked, setIsTextClicked] = useState(false);
  // const [activeLink, setActiveLink] = useState(1);

  const links = [
    { id: 1, link: 'dashboard', name: 'Dashboard', icon: <HouseIcon /> },
    { id: 2, link: 'cv', name: 'Moje CV', icon: <PersonalCardIcon /> },
    { id: 3, link: 'exercises', name: 'Ćwiczenia', icon: <EditIcon /> },
    // { id: 4, link: 'calendar', icon: <CalendarIcon /> },
    { id: 4, link: 'projects', name: 'Projekty', icon: <Folder /> },
    { id: 5, link: 'tech-stack', name: 'Tech-stack', icon: <SettingIcon /> },
    { id: 6, link: 'faq', name: 'FaQ', icon: <FaqIcon /> },
    // { id: 6, link: 'settings', name: '', icon: <SettingIcon /> },
    { id: 7, link: 'about-me', name: 'O mnie', icon: <User /> },
  ];

  // const handleClick = (linkId) => {
  //   setActiveLink(linkId);
  // };
  return (
    <aside>
      <nav>
        <ul>
          {links.map((link) => (
            <li>
              <div
              // className={
              //   activeLink === link.id ? 'svg-icon-clicked' : 'svg-icon'
              // }
              >
                {link.icon}
              </div>
              <NavLink
                key={link.id}
                // onClick={() => handleClick(link.id)}
                to={link.link}
                style={{ textTransform: 'capitalize' }}
              >
                {link.name}
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
