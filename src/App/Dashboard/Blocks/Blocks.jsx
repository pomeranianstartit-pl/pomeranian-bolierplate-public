import './styles.css';
import { Block } from './Block';
import { PersonalCardIcon } from '../../Components/Icons/PersonalCardIcon.jsx';
import { ExerciseIcon } from '../../Components/Icons/ExerciseIcon';

export const Blocks = () => {
  return (
    <div>
      <p>
        Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
        na kursie oraz umejętności zdobytych na kursie)
      </p>
      <div className="blocks">
        <div>
          <Block
            title="Moje CV"
            icon={<PersonalCardIcon />}
            description="podgląd cv wraz z doświadczeniem"
          />
        </div>
        <div>
          <Block
            title="Ćwiczenia"
            icon={<ExerciseIcon />}
            description="wszystkie wykonane ćwiczenia"
          />
        </div>
        <div>
          <Block
            title="Ćwiczenia"
            icon={<ExerciseIcon />}
            description="wszystkie wykonane ćwiczenia"
          />
        </div>
      </div>
    </div>
  );
};
