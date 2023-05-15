import './styles.css';
import { EditIcon } from '../Icons/EditIcon';

export const DashBlockExc = () => {
  return (
    <div>
      <div className="dashblocks">
        <div>Ćwiczenia</div>
        <div>
          <EditIcon />
        </div>
        <div>wszystkie wykonane ćwiczenia</div>
        <div>zobacz więcej ❱</div>
      </div>
    </div>
  );
};
