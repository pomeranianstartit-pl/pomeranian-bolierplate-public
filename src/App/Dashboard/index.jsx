import './styles.css';
import { BoxComponent } from './Components/box';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { ProfileComponent } from './Components/Profile/ProfileComponent';

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
    {
      title: 'Blog',
      logo: <BookIcon />,
      shortdescription: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Tech stack',
      logo: <EditIcon />,
      shortdescription: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'FAQ',
      logo: <EditIcon />,
      shortdescription: 'Lorem ipsum dolor sit amet.',
    },
  ];

  return (
    <div className="dashboard-section">
      <div className="left-section">
        <div className="dashboard">
          <h1 className="greeting">
            <img src="./" alt="" />
            Cześć, tu Krzysiek!
          </h1>
          <p>
            Poniżej znajdziesz najważniejsze informacje na temat mojej
            działalności.
          </p>
          <div>
            <div className="dashboard-wrapper">
              {DashBoardComponents.map((el) => (
                <BoxComponent
                  title={el.title}
                  logo={el.logo}
                  shortdescription={el.shortdescription}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div>
          <ProfileComponent />
        </div>
      </div>
    </div>
  );
};

// title= logo, shortdescription
