import { Link } from 'react-router-dom';

export const DashboardCard = ({ title, icon, description, link }) => {
  return (
    <dive className="dashboard-card">
      <h3>{title}</h3>
      {icon}
      <p>{description}</p>
      <Link to={link}>zobacz więcej {`>`} </Link>
    </dive>
  );
};
