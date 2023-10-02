import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { DashboardCard } from './DashboardCard';

const cards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  {
    title: 'Cwiczenia',
    icon: <EditIcon />,
    description: 'Wszystkie wykonane ćwiczenia',
    link: '/exercises',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, tu Szczepan 👋</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
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
