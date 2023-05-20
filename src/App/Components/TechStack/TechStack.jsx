import { Link } from 'react-router-dom';
import jsSvg from '../../Images/tech-stack/js.svg';
import reactSvg from '../../Images/tech-stack/react.svg';
import vscPng from '../../Images/tech-stack/vscode-alt 1.png';
import htmlSvg from '../../Images/tech-stack/html.svg';
import githuubSvg from '../../Images/tech-stack/githuub.svg';
import discordPng from '../../Images/tech-stack/discord-icon-svgrepo-com 3.png';
import jiraPng from '../../Images/tech-stack/jira 1.png';
import reduxPng from '../../Images/tech-stack/redux.png';
import redminePng from '../../Images/tech-stack/redmine.png';
import tsSvg from '../../Images/tech-stack/ts.svg';
import './styles.css';

export const TechStack = () => {
  return (
    <div className="dashboard">
      {' '}
      <div className="dashboard-tech-stack-container">
        {' '}
        <Link to=".." relative="path">
          {' '}
          {'< Tech stack'}{' '}
        </Link>{' '}
        <p>
          {' '}
          Poniżej znajdziesz tech stack oraz narzędzia jakie nauczysz sie
          podczas kursu{' '}
        </p>{' '}
        <div className="dashboard-tech-stack-flex">
          <div className="tech-stack-icon">
            <img src={jsSvg} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="tech-stack-icon">
            <img src={reactSvg} alt="React" /> <p>React</p>
          </div>
          <div className="tech-stack-icon">
            <img src={vscPng} alt="VSC" /> <p>VSC</p>
          </div>
          <div className="tech-stack-icon">
            <img src={htmlSvg} alt="HTML" /><p>HTML</p>
          </div>
          <div className="tech-stack-icon">
            <img src={githuubSvg} alt="GitHub" /><p>GitHub</p>
          </div>
          <div className="tech-stack-icon">
            <img src={discordPng} alt="Discord" /><p>Discord</p>
          </div>
          <div className="tech-stack-icon">
            <img src={jiraPng} alt="Jira" /><p>Jira</p>
          </div>
          <div className="tech-stack-icon">
            <img src={reduxPng} alt="Redux" /><p>Redux</p>
          </div>
          <div className="tech-stack-icon">
            <img src={redminePng} alt="Redmine" /><p>Redmine</p>
          </div>
          <div className="tech-stack-icon">
          <img src={tsSvg} alt="TypeScript" /><p>TypeScript</p>
          </div>
        </div>;
    </div>
    </div>
    );
};
