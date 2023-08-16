import { Link } from 'react-router-dom';
import './styles.css';

export const DashboardCard = ({ sectionTitle, icon, description, link }) => {
  return (
    <div className="window">
      <h3>{sectionTitle}</h3>
      <div className="icona">{icon}</div>

      <p>{description}</p>
      <Link to={link}>Zobacz więcej &gt;</Link>
    </div>
  );
};
