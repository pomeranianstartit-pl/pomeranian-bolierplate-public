import './styles.css';
import DashboardCard from '../Components/DashboardCard';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';

export const Dashboard = () => {
  const kafelki = [
    {
      title: 'Moje CV',
      logo: <CalendarIcon />,
      opis: 'podgląd cv wraz z doświadczeniem',
    },
    {
      title: 'Ćwiczenia',
      logo: <EditIcon />,
      opis: 'wszystkie wykonane ćwiczenia',
    },
    {
      title: 'Blog',
      logo: <ElementIcon />,
      opis: 'wpisy blogowe o technologii front-end',
    },
    {
      title: 'Tech stack',
      logo: <SettingIcon />,
      opis: 'stack technologiczny realizowany na kursie',
    },
    {
      title: 'FAQ',
      logo: <PersonalCardIcon />,
      opis: 'odpowiedzi na najczęstsze pytania',
    },
  ];

  return (
    <div className="dashboard">
      <h2> 👋 Hej Magda!</h2>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards-wrapper">
        {kafelki.map((kafelek) => {
          return (
            <DashboardCard
              title={kafelek.title}
              logo={kafelek.logo}
              opis={kafelek.opis}
            />
          );
        })}
      </div>
    </div>
  );
};
