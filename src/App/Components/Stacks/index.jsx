import './styles.css';
import { Stack } from '../Stack';
import bitbucketIcon from '../../Images/tech-stack/bitbucket.svg';
import cssIcon from '../../Images/tech-stack/css.svg';
import discordIcon from '../../Images/tech-stack/discord.svg';
import firebaseIcon from '../../Images/tech-stack/firebase.svg';
import gitIcon from '../../Images/tech-stack/git.svg';
import githubIcon from '../../Images/tech-stack/githuub.svg';
import htmlIcon from '../../Images/tech-stack/html.svg';
import jestIcon from '../../Images/tech-stack/jest.svg';
import jiraIcon from '../../Images/tech-stack/jira.svg';
import jsIcon from '../../Images/tech-stack/js.svg';
import reactIcon from '../../Images/tech-stack/react.svg';
import readmeIcon from '../../Images/tech-stack/readme.svg';
import reduxIcon from '../../Images/tech-stack/redux.svg';
import tsIcon from '../../Images/tech-stack/ts.svg';
import vscodeIcon from '../../Images/tech-stack/vscode.svg';

const stacks = [
  {
    iconSrc: cssIcon,
    description: 'css',
  },
  {
    iconSrc: htmlIcon,
    description: 'html',
  },
  {
    iconSrc: tsIcon,
    description: 'typescript',
  },
  {
    iconSrc: jsIcon,
    description: 'javascript',
  },
  {
    iconSrc: reactIcon,
    description: 'react',
  },
  {
    iconSrc: githubIcon,
    description: 'github',
  },
  {
    iconSrc: bitbucketIcon,
    description: 'bitbucket',
  },
  {
    iconSrc: jestIcon,
    description: 'jest',
  },
  {
    iconSrc: firebaseIcon,
    description: 'firebase',
  },
  {
    iconSrc: reduxIcon,
    description: 'redux',
  },
  {
    iconSrc: gitIcon,
    description: 'git',
  },
  {
    iconSrc: vscodeIcon,
    description: 'vscode',
  },
  {
    iconSrc: discordIcon,
    description: 'discord',
  },
  {
    iconSrc: jiraIcon,
    description: 'jira',
  },
  {
    iconSrc: readmeIcon,
    description: 'readmine',
  },
];

export const Stacks = () => {
  return <div className="stacks">{stacks.map(Stack)}</div>;
};
