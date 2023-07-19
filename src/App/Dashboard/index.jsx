import { SeeMore } from '../Components/SeeMore/SeeMore';
import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { MessageIcon } from '../Components/Icons/MessageIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CodeIcon } from '../Components/Icons/CodeIcon';
import { BlogIcon } from '../Components/Icons/BlogIcon';
import waving from '../Images/waving.png';
export const Dashboard = () => {
  const dashboardData = [
    {
      id: 1,
      title: 'Moje CV',
      icon: <PersonalCardIcon />,
      description: 'podgląd cv wraz z doświadczeniem',
    },
    {
      id: 2,
      title: 'Ćwiczenia',
      icon: <EditIcon />,
      description: 'wszystkie wykonane ćwiczenia',
    },
    {
      id: 3,
      title: 'Blog',
      icon: <BlogIcon />,
      description: 'wpisy blogowe o technologi front-end',
    },
    {
      id: 4,
      title: 'Tech Stack',
      icon: <CodeIcon />,
      description: 'stack technologiczny realizowany na kursie',
    },
    {
      id: 5,
      title: 'FAQ',
      icon: <MessageIcon />,
      description: 'odpowiedzi na najczęstsze pytania',
    },
  ];

  return (
    <div className="dashboard">
      <h2>
        <img className="dashboard-wave-image" src={waving}></img>
        Hej, tu Iwona!
      </h2>
      <p>
        Poniżej znajdziesz najważniejsze informację na temat mojej działalności
      </p>
      <div className="dashboard-cards-wrapper">
        {dashboardData.map((element) => {
          return (
            <SeeMore
              key={element.id}
              title={element.title}
              icon={element.icon}
              description={element.description}
            />
          );
        })}
      </div>
    </div>
  );
};
