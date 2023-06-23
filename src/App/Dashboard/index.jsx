import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';

import './styles.css';
import personalCard from '../Images/personalCard.svg';
import exercise from '../Images/exercise.svg';
import bookSaved from '../Images/bookSaved.svg';
import code from '../Images/code.svg';
import faq from '../Images/faq.svg';
import hand from '../Images/hand.svg';
import Cookies from '../Components/CookiesAgreement/Cookies';

export const Dashboard = () => {
    const [availableCards, setAvailableCards] = useState([{ sectionTitle: 'Moje CV', icon: <img src={personalCard} alt="business card resume" />, description: 'podgląd cv wraz z doświadczeniem', link: '/cv', }, { sectionTitle: ' Ćwiczenia', icon: <img src={exercise} alt="business card resume" />, description: 'wszystkie wykonane ćwiczenia', link: '/excercise', }, { sectionTitle: 'Blog', icon: <img src={bookSaved} alt="business card resume" />, description: 'wpisy blogowe o technologii front-end', link: '/blog', }, { sectionTitle: 'Tech stack', icon: <img src={code} alt="business card resume" />, description: 'stack technologiczny realizowany na kursie', link: '/tech', }, { sectionTitle: 'FAQ', icon: <img src={faq} alt="business card resume" />, description: 'odpowiedzi na najczęstsze pytania', link: '/faq', },]);
    return (
        <div className="dashboard">
          <header>
            <div className="dashboard-head">
                <img src={hand} />
            <h2 style={{marginLeft: '24px' }}>Hej, tu Klaudia!</h2>
            </div>
            <p>
              Poniżej znajdziesz najważniejsze informacje na temat mojej działalności
            </p>
          </header>
          <div className="windows">
            {availableCards.map((card) => {
              return (
                <div className="windows-main">
                <DashboardCard
                  sectionTitle={card.sectionTitle}
                  description={card.description}
                  link={card.link}
                  icon={card.icon}
                  myDumbProp="whatever"
                />
                </div>
              );
            })}
        </div>
        <aside className="about-me">
        </aside>
    </div>
  );
};
