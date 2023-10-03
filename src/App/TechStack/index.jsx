import './styles.css';
import { TechCard } from './Components/index';
import { mockData } from './data';
import { NavLink } from 'react-router-dom';

export const TechStack = () => {
  function createCard(card) {
    return <TechCard img={card.img} title={card.title} />;
  }
  return (
    <div className="techStack">
      <NavLink to=".././dashboard" className="backBtn">
        {'<'} Tech Stack
      </NavLink>
      <p className="techdecscription">
        Ponizej znajdziesz tech stack oraz narzędzia, jakich nauczyłam się
        podczas kursu.
      </p>
      <div className="techcards">{mockData.map(createCard)}</div>
    </div>
  );
};
