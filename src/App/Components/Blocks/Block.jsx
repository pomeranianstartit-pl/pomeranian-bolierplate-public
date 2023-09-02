import { Link as NavLink } from 'react-router-dom';
import './styles.css';

export const Block = ({ title, iconSrc, description, link }) => {
  return (
    <div className="block">
      <h4>{title}</h4>
      <img src={iconSrc} alt="" />
      <p>{description}</p>
      <NavLink to={link}>zobacz więcej {'>'}</NavLink>
    </div>
  );
};
