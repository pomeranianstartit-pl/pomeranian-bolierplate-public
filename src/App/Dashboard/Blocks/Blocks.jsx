import { CalendarIcon } from '../../Components/Icons/CalendarIcon';
import { EditIcon } from '../../Components/Icons/EditIcon';
import DashboardBlock from '../DashboardBlock/DashboardBlock';
import './styles.css';

export const Blocks = () => {
  return (
    <div className="dashboard-left">
      <DashboardBlock
        title="Moje CV"
        description="podgląd cv wraz z doświadczeniem"
        icon={<EditIcon className="block-icon" />}
        link="/cv"
      />
      <DashboardBlock
        title="Ćwiczenia"
        description="wszystkie wykonane ćwiczenia"
        icon={<CalendarIcon className="block-icon" />}
        link="/exercises"
      />
      <DashboardBlock
        title="Blog"
        description="wpisy blogowe o technologii front-end"
        icon={<CalendarIcon className="block-icon" />}
        link="/exercises"
      />
      <DashboardBlock
        title="Tech stack"
        description="stack technologiczny realizowany na kursie"
        icon={<CalendarIcon className="block-icon" />}
        link="/techstack"
      />
      <DashboardBlock
        title="Tech stack"
        description="odpowiedzi na najczęstsze pytania"
        icon={<CalendarIcon className="block-icon" />}
        link="/techstack"
      />
    </div>
  );
};
