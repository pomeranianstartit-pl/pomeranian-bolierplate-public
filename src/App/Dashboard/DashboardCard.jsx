import { Link } from 'react-router-dom';

export const DashboardCard = ({ title, icon, description, link }) => {
  return (
    <div className="dashboard-card">
      <h3>Title</h3>
      {icon}
      <p>{description}</p>
      <Link to={link}>Zobacz więcej</Link>
    </div>
  );
};
