import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { DashboardCard } from './DashboardCard';
import { ProfileCard } from './ProfileCard';

const cards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'pogląd CV wraz z doświadczeniem',
    link: '/cv',
  },
  {
    title: 'Ćwiczenia',
    icon: <EditIcon />,
    description: 'wszystkie wykonane ćwiczenia',
    link: '/exercises',
  },
  {
    title: 'Blog',
    icon: <EditIcon />,
    description: 'wpisy blogowe o technologii front-end',
    link: '/exercises',
  },
  {
    title: 'Tech stack',
    icon: <EditIcon />,
    description: 'stack technologiczny realizowany na kursie',
    link: '/exercises',
  },
  {
    title: 'FAQ',
    icon: <EditIcon />,
    description: 'odpowiedzi na najczęstsze pytania',
    link: '/exercises',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, tu Władeczek 👋</h1>
      <p className="dashboard-description">
        Poniżej znajdziesz informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        {cards.map(({ title, icon, description, link }) => (
          <DashboardCard
            title={title}
            icon={icon}
            description={description}
            link={link}
          />
        ))}
      </div>
      <div className="dashboard-aside">
        <ProfileCard
          name="Władysław"
          surname="Żorow"
          email="vlad.zhorov@gmail.com"
          imgSrc="https://www.istockphoto.com/pl/wektor/t%C5%82um-ludzi-wektor-bez-szwu-wz%C3%B3r-monochromatyczne-t%C5%82o-z-r%C3%B3%C5%BCnorodnymi-gm1278584455-377476711"
          phoneNumber="0123456789"
          city="Kraków"
        />
      </div>
    </div>
  );
};
