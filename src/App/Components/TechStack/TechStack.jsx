import './styles.css';
import { BackLink } from '../GoBack/GoBack';

import html5Icon from '../../Images/TechStack/html5.svg';
import jestIcon from '../../Images/TechStack/jest.svg';
import jiraIcon from '../../Images/TechStack/jira.svg';
import jsIcon from '../../Images/TechStack/js.svg';
import muiIcon from '../../Images/TechStack/mui.svg';
import prettierIcon from '../../Images/TechStack/prettier.svg';
import reactIcon from '../../Images/TechStack/react.svg';
import reduxIcon from '../../Images/TechStack/redux.svg';
import tsIcon from '../../Images/TechStack/ts.svg';
import vsIcon from '../../Images/TechStack/vs.svg';
import css3Icon from '../../Images/TechStack/css3.svg';
import discordIcon from '../../Images/TechStack/discord.svg';
import firebaseIcon from '../../Images/TechStack/firebase.svg';
import gitIcon from '../../Images/TechStack/git.svg';
import githubIcon from '../../Images/TechStack/github.svg';

const techData = [
  {
    icon: html5Icon,
    techTitle: 'HTML5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: css3Icon,
    techTitle: 'CSS3',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: jsIcon,
    techTitle: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    icon: tsIcon,
    techTitle: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  { icon: reactIcon, techTitle: 'React', url: 'https://reactjs.org/' },
  { icon: reduxIcon, techTitle: 'Redux', url: 'https://redux.js.org/' },
  { icon: muiIcon, techTitle: 'Material-UI', url: 'https://material-ui.com/' },
  { icon: gitIcon, techTitle: 'Git', url: 'https://git-scm.com/' },
  { icon: githubIcon, techTitle: 'GitHub', url: 'https://github.com/' },
  { icon: jestIcon, techTitle: 'Jest', url: 'https://jestjs.io/' },
  { icon: prettierIcon, techTitle: 'Prettier', url: 'https://prettier.io/' },
  {
    icon: vsIcon,
    techTitle: 'Visual Studio Code',
    url: 'https://code.visualstudio.com/',
  },
  {
    icon: jiraIcon,
    techTitle: 'Jira',
    url: 'https://www.atlassian.com/software/jira',
  },
  { icon: discordIcon, techTitle: 'Discord', url: 'https://discord.com/' },
  {
    icon: firebaseIcon,
    techTitle: 'Firebase',
    url: 'https://firebase.google.com/',
  },
];

export const TechStack = () => {
  return (
    <div>
      <BackLink label="&lt; Tech Stack" />
      <p>
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
        podczas kursu.
      </p>
      <div className="tech-stack-box">
        {techData.map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-stack-element"
          >
            <img
              src={tech.icon}
              alt={tech.techTitle}
              className="tech-stack-icon"
            />
            <p className="tech-stack-title">{tech.techTitle}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
