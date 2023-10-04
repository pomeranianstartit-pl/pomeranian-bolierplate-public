import { Link } from 'react-router-dom';
import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { BlogIcon } from '../Components/Icons/BlogIcon';
import { LinearIcon } from '../Components/Icons/LinearIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';


const dashboardCards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  {
    title: 'Ćwiczenia',
    icon: <EditIcon />,
    description: 'wszystkie wykonane ćwiczenia',
    link: '/cv',
  },
  {
    title: 'Blog',
    icon: <BlogIcon />,
    description: 'wpisy blogowe o technologii front-endu',
    link: '/cv',
  },
  {
    title: 'Tech stack',
    icon: <LinearIcon />,
    description: 'stach technologiczny realizowany na kursie',
    link: '/cv',
  },
  {
    title: 'FAQ',
    icon: <FaqIcon />,
    description: 'odpowiedzi na najczęstsze pytania',
    link: '/cv',
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
        {dashboardCards.map((card) => {
          return (
            <div className="dashboard-card">
              <h3>{card.title}</h3>
              {card.icon}
              <p>{card.description}</p>
              <Link to={card.link}>zobacz więcej {`>`} </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
};
