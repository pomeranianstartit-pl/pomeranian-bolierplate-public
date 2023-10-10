import './styles.css';
import { Block } from './Block';
import { PersonalCardIconRed } from '../../Components/Icons/PersonalCardIconRed.jsx';
import { ExerciseIcon } from '../../Components/Icons/ExerciseIcon';
import { BlockCV } from './BlockCV';
import { BlogIcon } from '../../Components/Icons/BlogIcon';
import { TechStackIcon } from '../../Components/Icons/TechStackIcon';
import { FaqIcon } from '../../Components/Icons/FaqIcon';

export const Blocks = () => {
  return (
    <div>
      <p>
        Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
        na kursie oraz umejętności zdobytych na kursie)
      </p>
      <div className="blocks">
        <div>
          <BlockCV
            title="Moje CV"
            icon={<PersonalCardIconRed />}
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
            title="Blog"
            icon={<BlogIcon />}
            description="wpisy blogowe o technologii front-end"
          />
        </div>
        <div>
          <Block
            title="Tech stack"
            icon={<TechStackIcon />}
            description="stack technologiczny realizowany na kursie"
          />
        </div>
        <div>
          <Block
            title="FAQ"
            icon={<FaqIcon />}
            description="odpowiedzi na najczęstsze pytania"
          />
        </div>
      </div>
    </div>
  );
};
