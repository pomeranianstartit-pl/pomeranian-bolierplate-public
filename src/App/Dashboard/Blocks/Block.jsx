import './styles.css';
import { Link } from 'react-router-dom';

export function Block({ title, icon, description, link }) {
  return (
    <div className="block-wraper">
      <div className="title">{title}</div>
      <div className="icon">{icon}</div>
      <div className="description">{description}</div>
      <div className="link">
        <Link to={link}>zobacz więcej {'>'} </Link>
      </div>
    </div>
  );
}
