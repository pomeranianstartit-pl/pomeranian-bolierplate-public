import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { NavLink } from 'react-router-dom';
import { EditIcon } from '../Components/Icons/EditIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';

const CARDS = [
  {
    title: 'Moje CV',
    img: <PersonalCardIcon />,
    description: 'podgląd cv wraz z doświadczeniem',
    link: <NavLink to="/cv">zobacz więcej {'>'}</NavLink>,
  },
  {
    title: 'Ćwiczenia',
    img: <EditIcon />,
    description: 'wszystkie wykonane ćwiczenia',
    link: <NavLink to="/exercises">zobacz więcej {'>'}</NavLink>,
  },
  {
    title: 'Blog',
    img: <BookIcon />,
    description: 'wpisy blogowe o technologii front-end',
    link: <NavLink to="blog">zobacz więcej {'>'}</NavLink>,
  },
  {
    title: 'Tech stack',
    img: <SettingIcon />,
    description: 'stack technologiczny realizowany na kursie',
    link: <NavLink to="exercise">zobacz więcej {'>'}</NavLink>,
  },
  {
    title: 'FAQ',
    img: <FAQIcon />,
    description: 'odpowiedzi na najczęstsze pytania',
    link: <NavLink to="exercise">zobacz więcej {'>'}</NavLink>,
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">👋🏻 Hej, tu Ania!</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        {CARDS.map((card) => (
          <div className="dashboard-card">
            {' '}
            <h3>{card.title}</h3>
            {card.img}
            {card.description}
            {card.link}
          </div>
        ))}
      </div>
      <aside className="dashboard-aside"></aside>
    </div>
  );
};
