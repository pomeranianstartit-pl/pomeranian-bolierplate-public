import './styles.css';

import DashboardCard from '../DasbordCard/DashboardCard';

import { useState } from 'react';

import PersonalCardIcon from '../Images/tiles/personalcard.svg';
import EditIcon from '../Images/tiles/edit.svg';
import FaqIcon from '../Images/faq.svg';
import CodeIcon from '../Images/tiles/code.svg';
import BlogIcon from '../Images/book-saved.svg';
import wavingHandSign from '../Components/Icons/waving-hand-sign.png';
export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={PersonalCardIcon} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img src={EditIcon} alt="excercises" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/excercise',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={BlogIcon} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={CodeIcon} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={FaqIcon} alt="business card resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);

  return (
    <div className="container">
      <div className="Card"></div>
      <div className="Head">
        <h3>
          <img src={wavingHandSign} alt="Hi" />
          Cześć, tu Adam!
        </h3>

        <h4>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności.
        </h4>
      </div>
      <div className="Boxes">
        <div className="dashboard-wrapper">
          {availableCards.map((card) => {
            return (
              <DashboardCard
                className
                sectionTitle={card.sectionTitle}
                description={card.description}
                link={card.link}
                icon={card.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
