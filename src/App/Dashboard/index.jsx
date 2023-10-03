import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CwIcon } from '../Components/Icons/CwIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { TechIcon } from '../Components/Icons/TechIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';
import myphoto from '../Images/myphoto.jpg';
import { DashboardCard } from './DashboardCard';

const dashboardCards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  {
    title: 'Ćwiczenia',
    icon: <CwIcon />,
    description: 'wszystkie wykonane ćwiczenia',
    link: '/exercises',
  },
  {
    title: 'Blog',
    icon: <BookIcon />,
    description: 'wpisy blogowe o technologii front-end',
    link: '/blog',
  },
  {
    title: 'Tech stack',
    icon: <TechIcon />,
    description: 'stack technologiczny realizowany na kursie',
    link: '/techstack',
  },
  {
    title: 'FAQ',
    icon: <FAQIcon />,
    description: 'odpowiedzi na najczęstsze pytania',
    link: '/FAQ',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, tu Katarzyna 👋</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        {dashboardCards.map(({ title, icon, description, link }) => (
          <DashboardCard
            title={title}
            icon={icon}
            description={description}
            link={link}
          />
        ))}
        ;
      </div>
      <div className="dashboard-aside">
        <img src={myphoto} />

        <div className="imienazwisko">
          <h2>Katarzyna Olkowska</h2>
        </div>

        <div className="miasto">
          <p>Gdańsk</p>
        </div>

        <div className="email">
          <p>e-mail:</p>
          <p> olkowskakatarzyna2@gmail.com</p>
        </div>

        <div className="telefon">
          <p>telefon:</p>
          <p> 000 000 000</p>
        </div>
      </div>
    </div>
  );
};
