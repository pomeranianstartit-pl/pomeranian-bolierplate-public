import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';
import personalCard from '../Images/tiles/personalcard.svg';



export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {      
      sectionTitle: 'Moje CV',      
      icon: <img src={personalCard} alt="business card resume" />,      
      description: 'podgląd cv wraz z doświadczeniem',      
      link: '/cv',    
    },    
    {      
      sectionTitle: 'Ćwiczenia',      
      icon: <img src={personalCard} alt="business card resume" />,      
      description: 'wszystkie wykonane ćwiczenia',      
      link: '/excercise',    
    },    
    {      
      sectionTitle: 'Blog',      
      icon: <img src={personalCard} alt="business card resume" />,      
      description: 'wpisy blogowe o technologii front-end',      
      link: '/blog',    
    },    
    {      
      sectionTitle: 'Tech stack',      
      icon: <img src={personalCard} alt="business card resume" />,      
      description: 'stack technologiczny realizowany na kursie',      
      link: '/tech',    
    },    
    {      
      sectionTitle: 'FAQ',      
      icon: <img src={personalCard} alt="business card resume" />,      
      description: 'odpowiedzi na najczęstsze pytania',      
      link: '/faq',    
    },
  ]);
  return (
    <div className="dashboard">
      <h1>Hej, tu Klaudia!</h1>
      <p>
      Poniżej znajdziesz najważniejsze informacje na temat mojej działalności
    <DashboardCard
    sectionTitle="Moje CV"
    description="podgląd cv wraz z doświadczeniem"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />
     <DashboardCard
    sectionTitle="Ćwiczenia"
    description="wszystkie wykonane ćwiczenia"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />
    <DashboardCard
    sectionTitle="Blog"
    description="wpisy blogowe o technologii front-end"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />
     <DashboardCard
    sectionTitle="Tech stack"
    description="stack technologiczny realizowany na kursie"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />
    <DashboardCard
    sectionTitle="FAQ"
    description="odpowiedzi na najczęstsze pytania"
    link="/cv"
    icon={<img src={personalCard} alt="business card resume" />}
    />

    </p>
    </div>

  );
};
