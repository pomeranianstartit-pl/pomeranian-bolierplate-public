import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">👋 Hej, tu Mateusz</h1>

      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>

      <div className="dashboards-cards">
        <div className="dashboard-card">
          <h3>Moje CV</h3>
          <PersonalCardIcon />
          <p>Podgląd cv wraz z doświadczeniem</p>
          <Link to="/cv">zobacz więcej</Link>
        </div>
      </div>

      <aside className="dashboard-aside">
        <h3>Mateusz Tywczyński</h3>
        <p>Gdańsk</p>
        <p>email: mateusz.tywczynski@gmail.com</p>
      </aside>
    </div>
  );
};
