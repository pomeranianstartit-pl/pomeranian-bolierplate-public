import { Link } from 'react-router-dom';
import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import {FaqIcon} from '../Components/Icons/FaqIcon';
// import { TechStack } from '../Components/Icons/TechStack';
import { DashboardCard } from './DashboardCard';

// import { Avatar} from './Avatar';


const dashboardCards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  {
    title: 'Ćwiczenia',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },

  {
    title: 'Blog',
    icon: <BookIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  // {
  //   title: 'Tech stack',
  //   icon: <TechStackIcon />,
  //   description: 'Podgląd CV wraz z doświadczeniem',
  //   link: '/cv',
  // },
  {
    title: 'FAQ',
    icon: <FaqIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },

];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, 👋</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        {dashboardCards.map((card) => {
          return (
            <DashboardCard title={card.title} icon={card.icon} description={card.description} link={card.link}/>
          );
        })}
      </div>

      <aside className="dashboard-aside">
        <div className='dash-aside'>
        <div className='dash-foto'>foto</div>
        {/* <img className='foto-img' src={Avatar} alt="zdjecie profilowe" width={90} height={90}></img> */}
        <div className='dash-name'>Arleta Dąbek</div>
        <p className='dash-city'>Warszawa</p>
        </div>

        <div className='dash-mail'>
          <p>e-mail:</p> 
          <p>arleta@gmail.com</p>

        <div className='dash-phone'>
          <p>tel.</p> 
          <p>111 222 333</p>
        </div>
        </div>
      </aside>
    </div>
  );
}