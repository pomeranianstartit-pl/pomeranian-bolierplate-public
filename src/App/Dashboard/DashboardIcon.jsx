import './styles.css';
import { Link } from 'react-router-dom';

export function DashboardIcon({ text, title, icon, link }) {
  return (
    <div className="dashboard-icon">
      <h3>{title}</h3>
      <div>{icon}</div>
      <div>{text}</div>
      <Link className="dashboard-link" to={link}>
        zobacz więcej {'>'}
      </Link>
    </div>
  );
}
