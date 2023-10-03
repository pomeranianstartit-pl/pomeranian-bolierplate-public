import './styles.css';

import { GitHuubIcon } from '../Components/Icons/GitHuubIcon';
import { HtmlIcon } from '../Components/Icons/HtmlIcon';
import { JsIcon } from '../Components/Icons/JsIcon';
import { React } from '../Components/Icons/ReactIcon';

const TechCards = [
  {
    icon: 'GithuubIcon',
    description: 'GitHuub',
  },

  {
    icon: 'HtmIcon',
    description: 'GitHuub',
  },

  {
    icon: 'JsIcon',
    description: 'J',
  },

  {
    icon: 'GithuubIcon',
    description: 'GitHuub',
  },

  {
    icon: 'HtmIcon',
    description: 'GitHuub',
  },

  {
    icon: 'JsIcon',
    description: 'J',
  },
]

export const TechStack = () => {
  return (
    <div className="tech-stack">
      <h1 className="tech-greeting">Hej, 👋</h1>
      <p className="tech-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>


    <div className="tech-card">
      {TechCards.map((card) => {
        return (
          <techCard icon={card.icon} description={card.description}/>
          );
        })}
      </div>
    </div>
  );
}