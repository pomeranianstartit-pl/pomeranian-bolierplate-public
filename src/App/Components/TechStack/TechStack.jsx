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
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się podczas kursu
        </p>
        <div className="dashboard-tech-stack-flex">
          <img src={vector} alt="css" />
          <img src={html} alt="html" />
          <img src={ts} alt="type_script" />
          <img src={jsSvg} alt="javascript" />
          <img src={react} alt="react" />
          <img src={github} alt="github" />
          <img src={firebase} alt="firebase" />
          <img src={jira} alt="jira" />
          <img src={bitbucket} alt="bitbucket" />
          <img src={redux} alt="redux" />
          <img src={discord} alt="discord" />
          <img src={vscode} alt="vscode" />
          <img src={redmine} alt="redmine" />
          <img src={git} alt="git" />
          </div>
      </div>
    </div>
  );
};
