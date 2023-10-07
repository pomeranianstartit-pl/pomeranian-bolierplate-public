import './styles.css';
import { BlocksTiles } from './BlocksTiles';
import { PersonalCardIcon } from '../../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../../Components/Icons/EditIcon';
import { BookIcon } from '../../Components/Icons/Book';
import { FaqIcon } from '../../Components/Icons/Faq';
import { TechstackIcon } from '../../Components/Icons/TechstackIcon';

export const Blocks = () => {
  return (
    <div>
      Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
      na kursie oraz umejętności zdobytych na kursie)
      <div className="block-tiles">
        <BlocksTiles
          icon={<PersonalCardIcon className="block-tiles-icon" />}
          description="podgląd cv wraz z doświadczeniem"
          title="MOJE CV"
          link="/cv"
        />
        <BlocksTiles
          icon={<EditIcon className="block-tiles-icon" />}
          description="wszystkie wykonane ćwiczenia"
          title="Ćwiczenia"
          link="/exercises"
        />
        <BlocksTiles
          icon={<BookIcon className="block-tiles-icon" />}
          description="wpisy blogowe o technologii front-end"
          title="Blog"
          link="/blog"
        />
        <BlocksTiles
          icon={<TechstackIcon className="block-tiles-icon" />}
          description="podgląd cv wraz z doświadczeniem"
          title="Tech stack"
          link="/tech_stack"
        />
        <BlocksTiles
          icon={<FaqIcon className="block-tiles-icon" />}
          description="podgląd cv wraz z doświadczeniem"
          title="FAQ"
          link="/faq"
        />
      </div>
    </div>
  );
};
