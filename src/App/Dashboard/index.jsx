import './styles.css';

import { DashboardCard } from '../Components/DashboardCard';
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Hej tu Ania!</h3>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <DashboardCard />
    </div>
  );
};
