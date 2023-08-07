import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import techstackIcon from '../Images/codeIcon.svg';
import faqIcon from '../Images/faq.svg';
export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <div className="aside-row__conteiner">

            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="dashboard">
                <HouseIcon className="icon" />
                <b>Dashboard</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="cv">
                <PersonalCardIcon className="icon" />
                <b >Moje CV</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="techstack">
                <img src={techstackIcon} className="icon--techstack" />
                <b>Tech Stack</b>
              </NavLink>
            </li>
            {/* <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="blocks">
                <ElementIcon className="icon" />
                <b>Bloki</b>
              </NavLink>
            </li> */}

            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="exercises">
                <EditIcon className="icon" />
                <b>Ćwiczenia</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="exercises/js/hit-the-mole-game">
                <CalendarIcon className="icon" />
                <b>Kalendarz</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="Blog">
                <CalendarIcon className="icon" />
                <b>Blog</b>
              </NavLink>
            </li>

            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="FAQ">
                <img src={faqIcon} className="icon" />
                <b>FAQ</b>
              </NavLink>
            </li>

          </div>
          <br />
          <hr color="grey" />
          <br />

          <li className="aside-row">
            <NavLink to="Settings" className='asied_row__link__conteiner' >
              <SettingIcon className="icon" />
              <b>Ustawienia</b>
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
}
