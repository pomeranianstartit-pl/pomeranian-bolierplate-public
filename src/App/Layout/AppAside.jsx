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
import hitthemoleIcon from '../Images/HitTheMoleIcon.svg';
import memoIcon from '../Images/MemoIcon.svg';
import formIcon from '../Images/FormIcon.svg';
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
              <NavLink className='asied_row__link__conteiner' to="hit-the-mole">
                <img src={hitthemoleIcon} className="icon" />
                <b>Gra | Kret</b>
              </NavLink>
            </li>
            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="memo">
                <img src={memoIcon} className="icon" />
                <b>Gra | Memo</b>
              </NavLink>
            </li>
            <li className="aside-row">
              <NavLink className='asied_row__link__conteiner' to="form">
                <img src={formIcon} className="icon" />
                <b>Formularz</b>
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
