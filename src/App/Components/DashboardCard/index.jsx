import './styles.css';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon';
import { EditIcon } from '../Icons/EditIcon';
import { BookIcon } from '../Icons/BookIcon';
import { CodeIcon } from '../Icons/CodeIcon';
import { MessageIcon } from '../Icons/MessageIcon';

export const DashboardCard = () => {
  return (
    <div className="dashboard-card-wrapper">
      <div className="boxIcons">
        <p className="first-text">Moje CV</p>
        <p className="height-icon">
          <PersonalCardIcon />
        </p>
        <p className="second-text">podgląd cv wraz z doświadczeniem</p>
        <button className="button-dashboard-card">zobacz więcej</button>
      </div>
      <div className="boxIcons">
        <p className="first-text">Ćwiczenia</p>
        <p className="height-icon">
          <EditIcon />
        </p>

        <p className="second-text">wszystkie wykonane ćwiczenia</p>

        <button className="button-dashboard-card">zobacz więcej</button>
      </div>
      <div className="boxIcons">
        <p className="first-text">Blog</p>
        <p className="height-icon">
          <BookIcon />
        </p>

        <p className="second-text">wpisy blogowe o technologii front-end</p>

        <button className="button-dashboard-card">zobacz więcej</button>
      </div>
      <div className="boxIcons">
        <p className="first-text">Tech stack</p>
        <p className="height-icon">
          <CodeIcon />
        </p>

        <p className="second-text">
          stack technologiczny realizowany na kursie
        </p>

        <button className="button-dashboard-card">zobacz więcej</button>
      </div>
      <div className="boxIcons">
        <p className="first-text">FAQ</p>
        <p className="height-icon">
          <MessageIcon />
        </p>

        <p className="second-text">odpowiedzi na najczęstsze pytania</p>
      </div>
      <button className="button-dashboard-card">zobacz więcej</button>
    </div>
  );
};
