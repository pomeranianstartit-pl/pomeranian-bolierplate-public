import './styles.css';
import { DashboardComponent } from '../Components/DashboardComponent';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';

export const Dashboard = () => {
  const DCinfos = [
    {
      id: 1,
      header: 'Moje CV',
      description: 'podgląd cv wraz z doświadczeniem',
      image: <PersonalCardIcon />,
    },

    {
      id: 2,
      header: 'Ćwiczenia',
      description: 'Ćwiczeniowe description',
      image: <EditIcon />,
    },

    {
      id: 3,
      header: 'Blog',
      description: 'podgląd cv wraz z doświadczeniem',
      image: <CalendarIcon />,
    },

    {
      id: 4,
      header: 'Tech Stack',
      description: 'podgląd cv wraz z doświadczeniem',
      image: <CalendarIcon />,
    },

    {
      id: 5,
      header: 'Moje CV',
      description: 'podgląd cv wraz z doświadczeniem',
      image: <CalendarIcon />,
    },
  ];

  return (
    <div className="dashboard">
      <h1> Hej, tu Aleksander</h1>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards-wrapper">
        {DCinfos.map((info) => {
          return (
            <DashboardComponent
              header={info.header}
              description={info.description}
              image={info.image}
            />
          );
        })}
      </div>
    </div>
  );
};
