import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';
import './styles.css';
import PersonalCardIcon from '../Images/tiles/personalcard.svg';
import EditIcon from '../Images/tiles/edit.svg';
import FaqIcon from '../Images/faq.svg';
import CodeIcon from '../Images/tiles/code.svg';
import BlogIcon from '../Images/book-saved.svg';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'My CV',
      icon: <img src={PersonalCardIcon} alt="business card resume" />,
      description: 'curriculum vitae',
      link: '/cv',
    },
    {
      sectionTitle: 'Exercises',
      icon: <img src={EditIcon} alt="excercises" />,
      description: 'exercises',
      link: '/excercises',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={BlogIcon} alt="business card resume" />,
      description: 'blog about front-end technology',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={CodeIcon} alt="business card resume" />,
      description: 'technological stack implemented during the course',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={FaqIcon} alt="business card resume" />,
      description: 'questions and answers',
      link: '/faq',
    },
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-hello">
        <h2 className="dashboard-title">Hey, it's Klaudia!</h2>
      </div>
      <p className="dashboard-description">
        Here you will find information about my knowledge and skills
      </p>
      <div className="dashboard-content">
        {availableCards.map((card) => {
          return (
            <DashboardCard
              className="card-shadow"
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