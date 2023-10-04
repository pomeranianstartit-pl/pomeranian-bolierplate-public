import { Link } from 'react-router-dom';
import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { BlogIcon } from '../Components/Icons/BlogIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';
import { TechStackIcon } from '../Components/Icons/TechStackIcon';

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
    link: '/exercises',
  },
  {
    title: 'Blog',
    icon: <BlogIcon />,
    description: 'wpisy blogowe o technologii front-end',
    link: '/blog',
  },
  {
    title: 'Tech stack',
    icon: <TechStackIcon />,
    description: 'stack technologiczny realizowany na kursie',
    link: '/cv',
  },
  {
    title: 'FAQ',
    icon: <FAQIcon />,
    description: 'odpowiedzi na najczęstsze pytania',
    link: '/faq',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, tu Mateusz 👋</h1>
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
      <aside className="dashboard-aside">
        <div className="dashboard-idcard">
          <h3>Mateusz Tywczyński</h3>
          <p>Gdańsk</p>
          <p>e-mail: mateusz.tywczynski@gmail.com</p>
          <p>telefon: 000 000 000</p>
        </div>
      </aside>
    </div>
  );
};
