import './styles.css';

import { Link as NavLink } from 'react-router-dom';

// import { personalCard } from '../../Images/tiles/personalcard.svg';

// import { exerciseBox } from '../../Images/tiles/edit.svg';

// import { blogBox } from '../../Images/tiles/edit.svg';

// import { techBox } from '../../Images/tech-stack/ts.svg';

// import { faqBox } from '../../Images/faq.svg';

export const BlocksBox2 = ({ title, iconSrc, description, link }) => {
  return (
    <div className="block-box-2">
      <h4>{title}</h4>
      <img src={iconSrc} alt="" />
      <p>{description}</p>
      <NavLink to={link}>zobacz więcej {'>'}</NavLink>
    </div>
  );
};
