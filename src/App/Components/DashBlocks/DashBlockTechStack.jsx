import './styles.css';
import { TechStackIcon } from '../Icons/TechStackIcon';

export const DashBlockTechStack = () => {
  return (
    <div>
      <div className="dashblockitem">
        <div className="headerDashBlock">Tech Stack</div>
        <div className="DashBlockIcon">
          <TechStackIcon />
        </div>
        <div className="DashBlockText">
          stack technologiczny realizowany na kursie
        </div>
        <div className="DashBlockSeeMore">zobacz więcej ❱</div>
      </div>
    </div>
  );
};
