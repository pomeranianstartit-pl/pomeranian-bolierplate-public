import './styles.css';
import { CSSIcon } from './TechStackIcons/CSSIcon';
import { HtmlIcon } from './TechStackIcons/htmlIcon';
import { TypescriptIcon } from './TechStackIcons/TypescriptIcon';
import { JsIcon } from './TechStackIcons/JsIcon';
import { ReactIcon } from './TechStackIcons/ReactIcon';
import { BitbucketIcon } from './TechStackIcons/BitbucketIcon';
import { JestIcon } from './TechStackIcons/JestIcon';
import { FirebaseIcon } from './TechStackIcons/FirebaseIcon';
import { ReduxIcon } from './TechStackIcons/ReduxIcon';
import { GitIcon } from './TechStackIcons/GitIcon';
import { GHIcon } from './TechStackIcons/GHIcon';
import { DiscordIcon } from './TechStackIcons/DiscordIcon';
import { JiraIcon } from './TechStackIcons/JiraIcon';
import { ReadmineIcon } from './TechStackIcons/ReadmineIcon';
//import { VscodeIcon } from './TechStackIcons/VscodeIcon';

const techstackCards = [
  {
    icon: <CSSIcon />,
    title: 'css',
  },
  {
    icon: <HtmlIcon />,
    title: 'html',
  },
  {
    icon: <TypescriptIcon />,
    title: 'typescript',
  },
  {
    icon: <JsIcon />,
    title: 'javascript',
  },
  {
    icon: <ReactIcon />,
    title: 'react',
  },
  {
    icon: <GHIcon />,
    title: 'github',
  },
  {
    icon: <BitbucketIcon />,
    title: 'bitbucket',
  },
  {
    icon: <JestIcon />,
    title: 'jest',
  },
  {
    icon: <FirebaseIcon />,
    title: 'firebase',
  },
  {
    icon: <ReduxIcon />,
    title: 'redux',
  },
  {
    icon: <GitIcon />,
    title: 'git',
  },
  // {
  //  icon: <VscodeIcon />,
  //  title: 'vscode',
  // },
  {
    icon: <DiscordIcon />,
    title: 'discord',
  },
  {
    icon: <JiraIcon />,
    title: 'jira',
  },
  {
    icon: <ReadmineIcon />,
    title: 'readmine',
  },
];

export const TechStack = () => {
  return (
    <div className="container-techstack">
      <h4 className="techstack-header">
        Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem się
        podczas kursu.
      </h4>
      <div className="techstack-cards">
        {techstackCards.map((card) => {
          return (
            <div className="techstack-card">
              {card.icon}
              <p>{card.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
