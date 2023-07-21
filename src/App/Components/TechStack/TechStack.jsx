import './styles.css';
import { Link } from 'react-router-dom';
import cssSvg from '../../Images/tech-stack/css.svg';
import htmlSVG from '../../Images/tech-stack/html.svg';
import tsSvg from '../../Images/tech-stack/ts.svg';
import jsSvg from '../../Images/tech-stack/js.svg';
import reactSvg from '../../Images/tech-stack/react.svg';
import githubSvg from '../../Images/tech-stack/githuub.svg';
import bitbucketSvg from '../../Images/tech-stack/bitbucket.svg';
import jestSvg from '../../Images/tech-stack/jest.svg';
import firebaseSvg from '../../Images/tech-stack/firebase.svg';
import reduxPng from '../../Images/tech-stack/redux.png';
import gitSvg from '../../Images/tech-stack/git.svg';
import vscPng from '../../Images/tech-stack/vscode-alt 1.png';
import discordSvg from '../../Images/tech-stack/discord.svg';
import jiraPng from '../../Images/tech-stack/jira 1.png';
import readminePng from '../../Images/tech-stack/redmine.png';

export const TechStack = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-tech-stack-container">
        <Link to=".." relative="path">
          {'< Tech stack'}
        </Link>

        <p>
          Poniżej znajdziesz tech stack oraz narzędzia jakie nauczysz sie
          podczas kursu
        </p>

        <div className="dashboard-tech-stack-flex">
          <a>
            <img src={cssSvg} alt="Css" />
            CSS
          </a>
          <a>
            <img src={htmlSVG} alt="Html" />
            HTML
          </a>
          <a>
            <img src={tsSvg} alt="Typescript" />
            TypeScript
          </a>
          <a>
            <img src={jsSvg} alt="Javascript" />
            JavaScript
          </a>
          <a>
            <img src={reactSvg} alt="React" />
            React
          </a>
          <a>
            <img src={githubSvg} alt="Github" />
            GitHub
          </a>
          <a>
            <img src={bitbucketSvg} alt="Bitbucket" />
            Bitbucket
          </a>
          <a>
            <img src={jestSvg} alt="Jest" />
            Jest
          </a>
          <a>
            <img src={firebaseSvg} alt="Firebase" />
            Firebase
          </a>
          <a>
            <img src={reduxPng} alt="Redux" />
            Redux
          </a>
          <a>
            <img src={gitSvg} alt="Git" />
            Git
          </a>
          <a>
            <img src={vscPng} alt="Vscode" />
            VSCode
          </a>
          <a>
            <img src={discordSvg} alt="Discord" />
            Discord
          </a>
          <a>
            <img src={jiraPng} alt="Jira" />
            Jira
          </a>
          <a>
            <img src={readminePng} alt="Readmine" />
            Readmine
          </a>
        </div>
      </div>
    </div>
  );
};
