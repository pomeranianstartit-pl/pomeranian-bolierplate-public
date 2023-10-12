import './styles.css';
import { DashboardIcon } from '../DashboardIcon';
import { EditIcon } from '../../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../../Components/Icons/PersonalCardIcon';
import { TechStack } from '../../Components/Icons/TechStackIcon';
import { BlogIcon } from '../../Components/Icons/BlogIcon';
import { FaqIcon } from '../../Components/Icons/FaqIcon';

export const Blocks = () => {
  return (
    <div>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-wrapper">
        <div className="dashboard-box">
          <DashboardIcon
            title="Moje cv"
            icon={<PersonalCardIcon className="blok-tile-icon" />}
            text="podgląd cv wraz z doświadczeniem"
            link="/cv"
          />
        </div>
        <div className="dashboard-box">
          <DashboardIcon
            title="Ćwiczenia"
            icon={<EditIcon className="blok-tile-icon" />}
            text="wszystkie wykonane ćwiczenia"
            link="/exercises"
          />
        </div>
        <div className="dashboard-box">
          <DashboardIcon
            title="Blog"
            icon={<BlogIcon className="blok-tile-icon" />}
            text="wpisy blogowe o technologii front-end"
            link="/Blog"
          />
        </div>
        <div className="dashboard-box">
          <DashboardIcon
            title="Tech stack"
            icon={<TechStack className="blok-tile-icon" />}
            text="stack technologiczny realizowany na kursie"
            link="/techstack"
          />
        </div>
        <div className="dashboard-box">
          <DashboardIcon
            title="FAQ"
            icon={<FaqIcon className="blok-tile-icon" />}
            text="odpowiedzi na najczęstsze pytania"
            link="/Faq"
          />
        </div>
      </div>
    </div>
  );
};
