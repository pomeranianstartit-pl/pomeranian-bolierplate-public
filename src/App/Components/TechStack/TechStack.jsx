import './styles.css';

import { Link } from 'react-router-dom';

import cssSvg from '../../Images/tech-stack/css.svg';
import htmlSvg from '../../Images/tech-stack/html.svg';
import tsSvg from '../../Images/tech-stack/ts.svg';
import jsSvg from '../../Images/tech-stack/js.svg';
import reactSvg from '../../Images/tech-stack/react.svg';
import githubSvg from '../../Images/tech-stack/githuub.svg';
import firebaseSvg from '../../Images/tech-stack/firebase.svg';
import jiraSvg from '../../Images/tech-stack/jira.svg';
import bitbucketSvg from '../../Images/tech-stack/bitbucket.svg';
import reduxSvg from '../../Images/tech-stack/redux.svg';
import discordSvg from '../../Images/tech-stack/discord.svg';
import vscSvg from '../../Images/tech-stack/VSC.svg';
import redmineSvg from '../../Images/tech-stack/redmine.svg';
import gitSvg from '../../Images/tech-stack/git.svg';

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
          Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem się podczas kursu{' '}
        </p>{' '}
        <div className="dashboard-tech-stack-flex">
          <div className="dashboard-tech-stack-grid">{' '}
            <div className='dashboard-tech-stack-element'>
              <img src={cssSvg} alt="css" />{' '}
              <p>CSS</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={htmlSvg} alt="html" />{' '}
              <p>HTML</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={tsSvg} alt="typescript" />{' '}
              <p>Type Script</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={jsSvg} alt="javascript" />{' '}
              <p>Java Script</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={reactSvg} alt="react" />{' '}
              <p>React</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={githubSvg} alt="github" />{' '}
              <p>GitHub</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={firebaseSvg} alt="firebase" />{' '}
              <p>Firebase</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={jiraSvg} alt="jira" />{' '}
              <p>Jira</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={bitbucketSvg} alt="bitbucket" />{' '}
              <p>ButBucket</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={reduxSvg} alt="redux" />{' '}
              <p>Redux</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={discordSvg} alt="discord" />{' '}
              <p>Discord</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={vscSvg} alt="VSC" />{' '}
              <p>VS Code</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={redmineSvg} alt="redmine" />{' '}
              <p>Redmine</p>
            </div>
            <div className='dashboard-tech-stack-element'>
              <img src={gitSvg} alt="git" />{' '}
              <p>Git</p>
            </div>
          </div>
        </div>{' '}
      </div>{' '}
    </div>
  );
};
