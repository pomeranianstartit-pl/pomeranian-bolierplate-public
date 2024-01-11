import './styles.css';

import { EditIcon } from '../../Components/Icons/EditIcon';

import { PersonalCardIcon } from '../../Components/Icons/PersonalCardIcon';
import { BlogIcon } from '../../Components/Icons/Blog';
import { TechStackIcon } from '../../Components/Icons/TechStackicon';
import { FaqIcon } from '../../Components/Icons/Faqicon';
import WavingHand from '../../Images/waving-hand.png';
import DashboardBlock from './DashBoardBlock';
export const Blocks = () => {
  return (
    <div>
      <p className="color_red_block">
        <img className="margin_img_block" src={WavingHand} alt="waving-hadn" />
        Hej, tu Artur!
      </p>
      <p>
        Poniżej znajdziesz najaważniejsze informacje na temat mojej
        działalności.
      </p>

      <div className="dashboard-left">
        <DashboardBlock
          title="Moje CV"
          description="Podgląd cv wraz z doświadczeniem."
          icon={<PersonalCardIcon className="block-icon" />}
          link="/cv"
        />
        <DashboardBlock
          title="Ćwiczenia"
          description="Wszystkie wykonane ćwiczenia."
          icon={<EditIcon className="block-icon" />}
          link="/exercises"
        />
        <DashboardBlock
          title="Blog"
          description="Wpisy blogowe o technologii front-end."
          icon={<BlogIcon className="block-icon" />}
          link="/exercises"
        />
        <DashboardBlock
          title="Tech stack"
          description="Stack technologiczny realizowany na kursie."
          icon={<TechStackIcon className="block-icon" />}
          link="/techstack"
        />
        <DashboardBlock
          title="Faq"
          description="Odpowiedzi na najczęstsze pytania."
          icon={<FaqIcon className="block-icon" />}
          link="/faq"
        />
      </div>
    </div>
  );
};
