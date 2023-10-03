import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { DashboardCard } from './DashboardCard';

const cards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'pogląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  {
    title: 'Ćwiczenia',
    icon: <EditIcon />,
    description: 'wszystkie wykonane ćwiczenia',
    link: '/exercises',
  },
  {
    title: 'Blog',
    icon: <EditIcon />,
    description: 'wpisy blogowe o technologii front-end',
    link: '/exercises',
  },
  {
    title: 'Tech stack',
    icon: <EditIcon />,
    description: 'stack technologiczny realizowany na kursie',
    link: '/exercises',
  },
  {
    title: 'FAQ',
    icon: <EditIcon />,
    description: 'odpowiedzi na najczęstsze pytania',
    link: '/exercises',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, tu Władeczek</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        {cards.map(({ title, icon, description, link }) => (
          <DashboardCard
            title={title}
            icon={icon}
            description={description}
            link={link}
          />
        ))}
      </div>
      <aside className="dashboard-aside"></aside>
    </div>
  );
};
