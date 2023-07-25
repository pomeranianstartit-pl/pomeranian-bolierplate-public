import './styles.css';
import { DashboardCards } from '../Components/DashboardCards';
import { BookSaved } from '../Components/Icons/BookSaved';
import { TechStack } from '../Components/Icons/TechStack';
import { FAQ } from '../Components/Icons/FAQ'
import { PersonalCardIconDashboard } from '../Components/Icons/PersonalCardIconDashboard';
import { ExerciseDashboardIcon } from '../Components/Icons/ExerciseIconDashboard';



export const Dashboard = () => {
  const dashboardData = [
    {
      id: 1,
      title: 'Moje CV',
      description: 'podgląd cv wraz z doświadczeniem',
      icon: <PersonalCardIconDashboard />,
    },
    {
      id: 2,
      title: 'Ćwiczenia',
      description: 'wszystkie wykonane ćwiczenia',
      icon: <ExerciseDashboardIcon />,
    },
    {
      id: 3,
      title: 'Blog',
      description: 'wpisy blogowe i technologii front-end',
      icon: <BookSaved />,
    },
    {
      id: 4,
      title: 'Tech Stack',
      description: 'stack technologiczny realizowany na kursie',
      icon: <TechStack />,
    },
    {
      id: 5,
      title: 'FAQ',
      description: 'odpowiedzi na najczęstsze pytania',
      icon: <FAQ />,
    }
  ]
  return (
    <div className="dashboard">
      <h2> Hej, tu Gabriela!</h2>
      <p>Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.</p>
      <div className='dashboard-cards-wrapper'>
        {dashboardData.map(element => {
          return <DashboardCards
            title={element.title}
            description={element.description}
            icon={element.icon} />
        })}

      </div>
    </div>
  );
};
