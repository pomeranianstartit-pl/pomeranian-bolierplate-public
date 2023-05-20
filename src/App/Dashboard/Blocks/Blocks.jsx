import { NavLink } from 'react-router-dom';
import '../styles/dashboard-tiles.css';
import '../styles/dashboard-tech-stack.css';
import '../styles/dashboard-about-me.css';



import codeSvg from '../../Images/tiles/code.svg';
import edit from '../../Images/tiles/edit.svg';
import folder2 from '../../Images/tiles/folder-2.svg';
import statusup from '../../Images/tiles/status-up.svg';
import teacher from '../../Images/tiles/teacher.svg';
import personalcard from '../../Images/tiles/personalcard.svg';

export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      {' '}
      <h2>Hej Maciej!</h2>{' '}
      <div className="dashboard-tiles">
        {' '}
        <div>
          
          <p className="dashboard-tile-title">Moje CV</p>{' '}
          <img src={personalcard} alt="cv" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Podgląd CV wraz z doświadczeniem{' '}
          </p>{' '}
          <a>Zobacz więcej</a>
          
        </div>
        
        <div >
          <p className="dashboard-tile-title">
          Projekty
          </p>
          <img src={folder2} alt="icon tech stack" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Pomysły zrealizowane i w realizacji{' '}
          </p>{' '}
          <a>Zobacz więcej</a>
        </div>
        
        <div>
        <p className="dashboard-tile-title">
          Ćwiczenia
          </p>
          <img src={edit} alt="icon tech stack" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Wszystkie wykonane ćwiczenia{' '}
          </p><a>Zobacz więcej</a>{' '}
        </div>
        <div>
        <p className="dashboard-tile-title">
          Edukacja
          </p>
          <img src={teacher} alt="icon tech stack" />{' '}
          <p className="dashboard-tile-description"> Przebyte kursy oraz szkolenia
           </p>{' '}
           <a>Zobacz więcej</a>
        </div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Tech stack</p>{' '}
          <img src={codeSvg} alt="icon tech stack" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Stack technologiczny realizowany na kursie{' '}
          </p><a><NavLink to="tech-stack">Zobacz więcej</NavLink></a>{' '}
          {/* <SeeMoreLink to="tech-stack" /> */}{' '}
        </div>{' '}
        <div>
        <p className="dashboard-tile-title">
          Doświadczenie
          </p>
          <img src={statusup} alt="icon tech stack" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Zdobyte doświadczenie {' '}
          </p><a>Zobacz więcej</a>{' '}
          
        </div>{' '}
      </div>{' '}
    </div>
  );
};
