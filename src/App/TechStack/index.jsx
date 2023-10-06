import './styles.css';
import { NavLink } from 'react-router-dom';
import { TechCard } from './Components/index';
import { mockData } from './data';

export const TechStack = () => {
  function createCard(card) {
    return <TechCard img={card.img} title={card.title} />;
  }
  return (
    <div className="techStack">
      <NavLink to=".././dashboard" className="backButton">
        {'<'} TECH STACK
      </NavLink>
      <p className="techstack-description">
        Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłam się
        podczas kursy.
      </p>
      <div className="techcards">{mockData.map(createCard)}</div>
    </div>
  );
};
