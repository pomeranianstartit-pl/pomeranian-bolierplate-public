import { NavLink } from 'react-router-dom';
import './styles.css';

export const Blok = ({ title, description, link, iconSrc }) => {
  return (
    <div className="block">
      <h4>{title}</h4>
      <img src={iconSrc} alt="" />
      <p>{description}</p>
      <NavLink to={link}>zobacz wiecej {'>'}</NavLink>
    </div>
  );
};
