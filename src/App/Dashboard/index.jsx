import './styles.css';

import { DashboardCard } from './DashboardCard';

import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { MessagesIcon } from '../Components/Icons/MessagesIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';

const cards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'podgląd CV wraz z doświadczeniem',
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
    icon: <BookIcon />,
    description: 'wpisy blogowe o technologii front-end',
    link: '/blog',
  },

  {
    title: 'Tech Stack',
    icon: <CalendarIcon />,
    description: 'stack technologiczny realizowany na kursie',
    link: '/blocks',
  },

  {
    title: 'FAQ',
    icon: <MessagesIcon />,
    description: 'odpowiedzi na najczęstrze pytania',
    link: '/faq',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, tu Kamila</h1>
      <p className="dashborad-description">
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
