import './styles.css';
import Css from '../Images/tech-stack/css.svg';
import { Html } from '../Components/Icons/Html.jsx';
import { Ts } from '../Components/Icons/Ts.jsx';
import { Js } from '../Components/Icons/Js.jsx';
import { React } from '../Components/Icons/React.jsx';
import { Github } from '../Components/Icons/Github.jsx';
import { Bitbucket } from '../Components/Icons/Bitbucket.jsx';
import { Jest } from '../Components/Icons/Jest.jsx';
import { Redux } from '../Components/Icons/Redux.jsx';
import { Firebase } from '../Components/Icons/Firebase.jsx';
import { Git } from '../Components/Icons/Git.jsx';
import { Discord } from '../Components/Icons/Discord.jsx';
import { Readmine } from '../Components/Icons/Readmine.jsx';
import Vscode from '../Images/tech-stack/vscode.png';

import { NavLink } from 'react-router-dom';

const techStackData = [
  {
    src: Css,
    text: 'css',
  },
  {
    component: <Html />,
    text: 'html',
  },
  {
    component: <Ts />,
    text: 'typescript',
  },
  {
    component: <Js />,
    text: 'javascript',
  },
  {
    component: <React />,
    text: 'react',
  },
  {
    component: <Github />,
    text: 'github',
  },
  {
    component: <Bitbucket />,
    text: 'bitbucket',
  },
  {
    component: <Jest />,
    text: 'jest',
  },
  {
    component: <Firebase />,
    text: 'firebase',
  },
  {
    component: <Redux />,
    text: 'redux',
  },
  {
    component: <Git />,
    text: 'git',
  },
  {
    src: Vscode,
    text: 'vscode',
  },
  {
    component: <Discord />,
    text: 'discord',
  },
  {
    src: require('../Images/tech-stack/jira.png'),
    text: 'jira',
  },
  {
    component: <Readmine />,
    text: 'readmine',
  },
];
export const TechStack = () => {
  return (
    <div className="tech-stack-box">
      <a href="/dashboard"> &#60; TECH STACK</a>
      <p>
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
        podczas kursu.
      </p>
      <div className="tech-stack-grid-div">
        {techStackData.map((element, i) => {
          return (
            <div key={i}>
              {element.component && element.component}
              {element.src && <img src={element.src} alt={element.text} />}
              <p>{element.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
