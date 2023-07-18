import './styles.css';
import { BoxComponent } from './Components/box';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { BookIcon } from '../Components/Icons/BookIcon';

export const Dashboard = () => {
  const DashBoardComponents = [
    {
      title: 'Moje CV',
      logo: <PersonalCardIcon />,
      shortdescription: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Ćwiczenia',
      logo: <EditIcon />,
      shortdescription: 'Lorem ipsum dolor sit amet.',
    },
  ];

  return (
    <div className="dashboard">
      <h1>Cześć, tu Krzysiek!</h1>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div>
        <div className="boxes">
          {DashBoardComponents.map((el) => (
            <BoxComponent
              title={el.title}
              logo={el.logo}
              shortdescription={el.shortdescription}
            />
          ))}
        </div>
        <div className="profile-box">
          
        </div>
      </div>
    </div>
  );
};

// title= logo, shortdescription
