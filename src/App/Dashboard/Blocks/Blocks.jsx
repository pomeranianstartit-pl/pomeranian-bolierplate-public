import { ReactComponent as Code } from '../../Images/tiles/code.svg';
import { ReactComponent as PersonalCard } from '../../Images/tiles/personalcard.svg';
import { ReactComponent as Edit } from '../../Images/tiles/edit.svg';
import { ReactComponent as Folder } from '../../Images/tiles/folder-2.svg';
import { ReactComponent as StatusUp } from '../../Images/tiles/status-up.svg';
import { ReactComponent as Teacher } from '../../Images/tiles/teacher.svg';
import { ReactComponent as Hand } from '../../Images/waving-hand.svg';

import { Link } from 'react-router-dom';

export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      <h2>
        <Hand />
        &nbsp;&nbsp;Hej, tu Karolina!
      </h2>
      <p className="dashboard-intro-text">
        Poniżej znajdziesz trochę informacji o mnie i moich umiejętnościach.
      </p>
      <div className="dashboard-tiles">
        <div>
          <p className="dashboard-tile-title">Moje CV</p>
          <div className="dashboard-tile-image">
            <PersonalCard />
          </div>
          <p className="dashboard-tile-description">
            podgląd CV wraz z doświadczeniem
          </p>
          <Link to="/cv">Zobacz więcej</Link>
        </div>
        <div>
          <p className="dashboard-tile-title">Projekty</p>
          <div className="dashboard-tile-image">
            <Folder />
          </div>
          <p className="dashboard-tile-description">
            wszystkie zrealizowane projekty
          </p>
          <Link to="/projects">Zobacz więcej</Link>
        </div>
        <div>
          <p className="dashboard-tile-title">Ćwiczenia</p>
          <div className="dashboard-tile-image">
            <Edit />
          </div>
          <p className="dashboard-tile-description">
            wszystkie wykonane ćwiczenia
          </p>
          <Link to="/exercises">Zobacz więcej</Link>
        </div>
        <div>
          <p className="dashboard-tile-title">Edukacja</p>
          <div className="dashboard-tile-image">
            <Teacher />
          </div>
          <p className="dashboard-tile-description">moja ścieżka edukacji</p>
          <Link to="/dashboard/tech-stack">Zobacz więcej</Link>
        </div>
        <div>
          <p className="dashboard-tile-title">Tech stack</p>
          <div className="dashboard-tile-image">
            <Code />
          </div>
          <p className="dashboard-tile-description">
            Stack technologiczny realizowany na kursie
          </p>
          <Link to="/tech-stack">Zobacz więcej</Link>
          {/* <SeeMoreLink to="tech-stack" /> */}
        </div>
        <div>
          <p className="dashboard-tile-title">Doświadczenie</p>
          <div className="dashboard-tile-image">
            <StatusUp />
          </div>
          <p className="dashboard-tile-description">
            moje dotychczasowe doświadczenie
          </p>
          <Link to="/dashboard/tech-stack">Zobacz więcej</Link>
        </div>
      </div>
    </div>
  );
};
