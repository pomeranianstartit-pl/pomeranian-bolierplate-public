import './styles.css';

import { TECH_STACK_DATA } from './data';

import { TechStackItem } from './TechStackItem';

export const TechStack = () => {
  return (
    <div className="techstack">
      <h2 className="techstack-title">
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
        podczas kursu.
      </h2>
      <div className="techstack-content">
        {TECH_STACK_DATA.map(({ title, icon }) => (
          <TechStackItem title={title} icon={icon} />
        ))}
      </div>
    </div>
  );
};
