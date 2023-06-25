import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import personalCard from '../Images/tiles/personalcard.svg';
import faq from '../Images/faq.svg';
import edit from '../Images/tiles/edit.svg';
import booksaved from '../Images/book-saved.svg';
import code from '../Images/tiles/code.svg';
import hand from '../Images/hand.svg';
import { useState } from 'react';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: (
        <img
          className="card-icon"
          src={personalCard}
          alt="business card resume"
        />
      ),
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img className="edit-icon" src={edit} alt="exercise resume" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/exercises',
    },
    {
      sectionTitle: 'Blog',
      icon: <img className="book-icon" src={booksaved} alt="blog resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img className="code-icon" src={code} alt="tech stack resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img className="faq-icon" src={faq} alt="faq resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-head">
        <img className="hand-icon" src={hand} alt="zdjecie reki" />
        <h3 style={{ marginLeft: '10px' }}>Hej, tu Adrian!</h3>
      </div>
      <p>
        Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
        na kursie oraz umejętności zdobytych na kursie)
      </p>
      <div className="windows">
        {availableCards.map((card) => {
          return (
            <div className="windows-main">
              <DashboardCard
                sectionTitle={card.sectionTitle}
                description={card.description}
                link={card.link}
                icon={card.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
