import './styles.css';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon';

export const DashBlockCV = () => {
  return (
    <div>
      <div className="dashblocks">
        <div>Moje CV</div>
        <div>
          <PersonalCardIcon />
        </div>
        <div>podgląd cv wraz z doświadczeniem</div>
        <div>zobacz więcej ❱</div>
      </div>
    </div>
  );
};
