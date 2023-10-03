import { Link } from 'react-router-dom';
import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import {FaqIcon} from '../Components/Icons/FaqIcons';
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
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },

  {
    title: 'Blog',
    icon: <BookIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  {
    title: 'Tech stack',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  {
    title: 'FAQ',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, 👋</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        {dashboardCards.map((card) => {
          return (
            <DashboardCard title={card.title} icon={card.icon} description={card.description} link={card.link}/>
          );
        })}
      </div>
      <aside className="dashboard-aside"></aside>
    </div>
  );
 }