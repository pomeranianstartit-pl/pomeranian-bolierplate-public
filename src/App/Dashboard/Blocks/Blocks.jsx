import { SingleBox } from '../SingleBox/SingleBox';
import PersonalCardIcon from '../../Images/tiles/personalcard.svg';

import './styles.css';

export const Blocks = () => {
  return (
    <div className="blocksData">
      <p>
        Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
        na kursie oraz umejętności zdobytych na kursie)
      </p>
      <div className="gridWrapper">
        <SingleBox
          source={PersonalCardIcon}
          title="Moje cv"
          text="podgląd cv wraz z doświadczeniem"
        />
        <SingleBox
          source={PersonalCardIcon}
          title="Ćwiczenia"
          text="wszystkie wykonane ćwiczenia"
        />
        <SingleBox
          source={PersonalCardIcon}
          title="Blog"
          text="wpisy blogowe o technologii front-end"
        />
        <SingleBox
          source={PersonalCardIcon}
          title="Tech stack"
          text="stack technologiczny realizowany na kursie"
        />
        <SingleBox
          source={PersonalCardIcon}
          title="FAQ"
          text="odpowiedzi na najczęstsze pytania"
        />
        {/* <div className="rightPanel"></div> */}
      </div>
    </div>
  );
};
