import './styles.css';
import { Link } from 'react-router-dom';
import jsSvg from '../../Images/tech-stack/js.svg';
import html from '../../Images/tech-stack/html.svg';
import vector from '../../Images/tech-stack/Vector.svg';
import ts from '../../Images/tech-stack/ts.svg';
import react from '../../Images/tech-stack/react.svg';
import github from '../../Images/tech-stack/githuub.svg';
import firebase from '../../Images/tech-stack/firebase.svg';
import jira from '../../Images/tech-stack/jira.svg';
import bitbucket from '../../Images/tech-stack/bitbucket.svg';
import redux from '../../Images/tech-stack/redux.svg';
import discord from '../../Images/tech-stack/discord.svg';
import vscode from '../../Images/tech-stack/vscode.svg';
import redmine from '../../Images/tech-stack/redmine.svg';
import git from '../../Images/tech-stack/git.svg';

export const TechStack = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-tech-stack-container">
        <Link to=".." relative="path">
          {'< Tech stack'}
        </Link>
        <p>
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
          podczas kursu
        </p>
        <div className="dashboard-tech-stack-flex">
          <div>
            <img src={vector} alt="css" />
            <br />
            <p>css</p>
          </div>
          <div>
            <img src={html} alt="html" />
            <br />
            <p>html</p>
          </div>
          <div>
            <img src={ts} alt="type_script" />
            <br />
            <p>type script</p>
          </div>
          <div>
            <img src={jsSvg} alt="javascript" />
            <br />
            <p>java script</p>
          </div>
          <div>
            <img src={react} alt="react" />
            <br />
            <p>react</p>
          </div>
          <div>
            <img src={github} alt="github" />
            <br />
            <p>github</p>
          </div>
          <div>
            <img src={firebase} alt="firebase" />
            <br />
            <p>firebase</p>
          </div>
          <div>
            <img src={jira} alt="jira" />
            <br />
            <p>jira</p>
          </div>
          <div>
            <img src={bitbucket} alt="bitbucket" />
            <br />
            <p>bitbucket</p>
          </div>
          <div>
            <img src={redux} alt="redux" />
            <br />
            <p>redux</p>
          </div>
          <div>
            <img src={discord} alt="discord" />
            <br />
            <p>discord</p>
          </div>
          <div>
            <img src={vscode} alt="vscode" />
            <br />
            <p>v studio</p>
          </div>
          <div>
            <img src={redmine} alt="redmine" />
            <br />
            <p>redmine</p>
          </div>
          <div>
            <img src={git} alt="git" />
            <br />
            <p>GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};
