import './styles.css';
import DashboardCard from '../Components/DashboardCard';

import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';


export const Dashboard = () => {

  const dashboardData = [

    {

      id: 1,

      title: 'Moje CV',

      description: 'podgląd cv wraz z doświadczeniem',

      icon: <PersonalCardIcon />,

    },

    {

      id: 2,

      title: 'Ćwiczenia',

      description: 'Ćwiczeniowe description',

      icon: <ElementIcon />,

    },

    {

      id: 3,

      title: 'Blog',

      description: 'podgląd cv wraz z doświadczeniem',

      icon: <CalendarIcon />,

    },

    {

      id: 4,

      title: 'Tech Stack',

      description: 'podgląd cv wraz z doświadczeniem',

      icon: <CalendarIcon />,

    },

    {

      id: 5,

      title: 'Moje CV',

      description: 'podgląd cv wraz z doświadczeniem',

      icon: <CalendarIcon />,

    },

  ];




  return (

    <div className="dashboard">

      <h2 className='dashboard-header'>👋 Hej, tu Olga!</h2>

      <p className='dashboard-description'>

        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.

      </p>

      <div className="dashboard-cards-wrapper">

        {dashboardData.map((element) => {

          return (

            <DashboardCard

              title={element.title}

              description={element.description}

              icon={element.icon}

            />

          );

        })}

      </div>

        <div className='dashboard-personal-info'></div>
    </div>

  );

};