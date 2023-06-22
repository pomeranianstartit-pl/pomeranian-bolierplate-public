import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';
import setting from '../Images/setting.svg'
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <PersonalCardIcon alt="business card resume" />,
      description: 'moje curriculum vitae',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <EditIcon alt="business card resume" />,
      description: 'wykonane ćwiczenia',
      link: '/exercises',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={setting} alt="business card resume" />,
      description: 'blog o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={setting} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={setting} alt="business card resume" />,
      description: 'odpowiedzi na najczęściej zadawane pytania',
      link: '/faq',
    },
  ]);
  
  return (

    <div className="dashboard">
      <div className="dashboard-hello">
        <h1 className="dashboard-title">Cześć!</h1>
      </div>
      <p className="dashboard-description">
      Znajdziesz tu informacje o przebiegu mojego kursu
      </p>
      <div className="dashboard-content">
        {availableCards.map((card) => {
          return (
            <DashboardCard
              sectionTitle={card.sectionTitle}
              description={card.description}
              link={card.link}
              icon={card.icon}
            />
          );
        })}
      </div>
    </div>
  );
};
