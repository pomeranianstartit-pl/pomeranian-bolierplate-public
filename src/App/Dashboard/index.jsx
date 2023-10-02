import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CwIcon } from '../Components/Icons/CwIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { TechIcon } from '../Components/Icons/TechIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';
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
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/blog',
  },
  {
    title: 'Tech stack',
    icon: <TechIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/techstack',
  },
  {
    title: 'FAQ',
    icon: <FAQIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
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
      <aside className="dashboard-aside"></aside>
    </div>
  );
};
