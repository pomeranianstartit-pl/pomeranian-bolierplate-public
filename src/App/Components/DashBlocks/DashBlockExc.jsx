import './styles.css';
import { EditIcon } from '../Icons/EditIcon';

export const DashBlockExc = () => {
  return (
    <div>
      <div className="dashblockitem">
        <div className="headerDashBlock">Ćwiczenia</div>
        <div className="DashBlockIcon">
          <EditIcon />
        </div>
        <div className="DashBlockText">wszystkie wykonane ćwiczenia</div>
        <div className="DashBlockSeeMore">zobacz więcej ❱</div>
      </div>
    </div>
  );
};
