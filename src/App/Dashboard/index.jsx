import './styles.css';
import hand from '../Images/emogiHand.svg';
import { useState } from 'react';
import { DashboardCard } from '../Components/DashboardCard/DashboardCard';
import { EditIcon } from '../Components/Icons/EditIcon';
import BlogIcone from '../Images/blogIcon.svg';
import CodeIcone from '../Images/codeIcon.svg';
import { FAQIcon } from '../Components/Icons/FaqIcon.jsx';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={DashboardCard} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img src={EditIcon} alt="business card resume" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/excercise',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={BlogIcone} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={CodeIcone} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <FAQIcon/>,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);
  return (
    <div className="dashboard">
      <h3>
        <img src={hand} /> Hej, tutaj Dominik!
      </h3>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności
      </p>
      <div className="windows">
        {availableCards.map((card) => {
          return (
            <div className="window-main">
              <DashboardCard
                sectionTitle={card.sectionTitle}
                icon={card.icon}
                description={card.description}
                link={card.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
