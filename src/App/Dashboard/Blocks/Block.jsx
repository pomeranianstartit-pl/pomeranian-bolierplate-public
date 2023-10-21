import './styles.css';
import { SingleBlock } from './SingleBlock';
import { PersonalCardIcon } from '../../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../../Components/Icons/EditIcon';
import { BookSavedIcon } from '../../Components/Icons/BookSavedIcon';
import { MessageIcon } from '../../Components/Icons/MessageIcon';
import { TechstackIcon } from '../../Components/Icons/TechstackIcon';

export const Blocks = () => {
  return (
    <div className="blocks_grid">
      <SingleBlock
        title="Moje cv"
        description="podgląd cv wraz z doświadczeniem"
        icon={<PersonalCardIcon />}
        link="cv/*"
      />
      <SingleBlock
        title="Ćwiczenia"
        description="wszystkie wykonane ćwiczenia"
        icon={<EditIcon />}
        link="exercise/*"
      />
      <SingleBlock
        title="Blog"
        description="wpisy blogowe o technologii front-end"
        icon={<BookSavedIcon />}
        link="cv/*"
      />
      <SingleBlock
        title="Techstack"
        description="Stack technologiczny realizowany na kursie"
        icon={<TechstackIcon />}
        link="cv/*"
      />
      <SingleBlock
        title="FAQ"
        description="odpowiedzi na najczęstsze pytania"
        icon={<MessageIcon />}
        link="cv/*"
      />
    </div>
  );
};
