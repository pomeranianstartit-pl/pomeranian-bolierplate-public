import './styles.css';
import { TechStackIcon } from '../Icons/TechStackIcon';

export const DashBlockTechStack = () => {
  return (
    <div>
      <div className="dashblocks">
        <div>Tech Stack</div>
        <div>
          <TechStackIcon />
        </div>
        <div>stack technologiczny realizowany na kursie</div>
        <div>zobacz więcej ❱</div>
      </div>
    </div>
  );
};
