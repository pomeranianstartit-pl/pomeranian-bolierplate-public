import { NavLink } from 'react-router-dom';
import './style.css';

export function DashComp(props) {
  return (
    <div className="card">
      <h2 className="title">{props.title}</h2>
      <div className="img">{props.img}</div>
      <div className="description">{props.description}</div>
      <NavLink to={props.more} className="more">
        Zobacz więcej {'>'}
      </NavLink>
    </div>
  );
}
