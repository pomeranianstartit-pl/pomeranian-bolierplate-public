import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';
import setting from '../Images/setting.svg'
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'My CV',
      icon: <PersonalCardIcon alt="business card resume" />,
      description: 'curriculum vitae',
      link: '/cv',
    },
    {
      sectionTitle: ' Exercises',
      icon: <EditIcon alt="business card resume" />,
      description: 'exercises',
      link: '/exercises',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={setting} alt="business card resume" />,
      description: 'blog about front-end technology',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={setting} alt="business card resume" />,
      description: 'technological stack implemented on the course',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={setting} alt="business card resume" />,
      description: 'answers to the most frequently asked questions',
      link: '/faq',
    },
  ]);
  
  return (

    <div className="dashboard">
      <div className="dashboard-hello">
        <h1 className="dashboard-title">Hi!</h1>
      </div>
      <p className="dashboard-description">
      Here you will find information about my knowledge and skills
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
