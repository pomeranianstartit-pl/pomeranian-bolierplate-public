import './styles.css';

import { GitHuubIcon } from '../Components/Icons/GitHuubIcon';
import { HtmlIcon } from '../Components/Icons/HtmlIcon';
import { JsIcon } from '../Components/Icons/JsIcon';
import { React } from '../Components/Icons/ReactIcon';

const TechCards = [
  {
    icon: <GitHuubIcon/>,
    description: 'GitHuub',
  },

  {
    icon: <HtmlIcon/>,
    description: 'HTML',
  },

  {
    icon: <JsIcon/>,
    description: 'Js',
  },

  // {
  //   icon: <ReactIcon/>,
  //   description: 'React',
  // },
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