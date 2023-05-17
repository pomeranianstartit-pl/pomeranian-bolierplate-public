import './styles.css';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon';

export const DashBlockCV = () => {
  return (
    <div>
      <div className="dashblockitem">
        <div className="headerDashBlock">Moje CV</div>
        <div className="DashBlockIcon">
          <PersonalCardIcon />
        </div>
        <div className="DashBlockText">podgląd cv wraz z doświadczeniem</div>
        <div className="DashBlockSeeMore">zobacz więcej ❱</div>
      </div>
    </div>
  );
};
