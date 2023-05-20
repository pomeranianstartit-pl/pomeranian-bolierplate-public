import './styles.css';
import discord from '../../Images/tech-stack/discord-icon-svgrepo-com3.png';
import github from '../../Images/tech-stack/githuub.svg';
import html from '../../Images/tech-stack/html.svg';
import jira1 from '../../Images/tech-stack/jira1.png';
import js from '../../Images/tech-stack/js.svg';
import react from '../../Images/tech-stack/react.svg';
import redmine from '../../Images/tech-stack/redmine.png';
import redux from '../../Images/tech-stack/redux.png';
import ts from '../../Images/tech-stack/ts.svg';
import vsc from '../../Images/tech-stack/vscode-alt1.png';
import bitbucket from '../../Images/tech-stack/bitbucket.svg';
import css from '../../Images/tech-stack/css.svg';
import firebase from '../../Images/tech-stack/firebase-svgrepo-com 1.svg';
import git from '../../Images/tech-stack/git.svg';

export const TechStack = () => {
  return (
    <div>
      <h2>&lt; TECHSTACK</h2>
      <p>
        Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem sie
        podczas kursu
      </p>
      <div className="techstack-icons-container">
        <div className="techstack-iconpack">
          <img src={css} alt="logo discorda" />
          <p>css</p>
        </div>
        <div className="techstack-iconpack">
          <img src={html} alt="logo discorda" />
          <p>html</p>
        </div>
        <div className="techstack-iconpack">
          <img src={ts} alt="logo discorda" />
          <p>type script</p>
        </div>
        <div className="techstack-iconpack">
          <img src={js} alt="logo discorda" />
          <p>java script</p>
        </div>
        <div className="techstack-iconpack">
          <img src={react} alt="logo discorda" />
          <p>react</p>
        </div>
        <div className="techstack-iconpack">
          <img src={github} alt="logo githuba" />
          <p>github</p>
        </div>
        <div className="techstack-iconpack">
          <img src={firebase} alt="logo discorda" />
          <p>firebase</p>
        </div>
        <div className="techstack-iconpack">
          <img src={jira1} alt="logo discorda" />
          <p>jira</p>
        </div>
        <div className="techstack-iconpack">
          <img src={bitbucket} alt="logo discorda" />
          <p>bitbucket</p>
        </div>
        <div className="techstack-iconpack">
          <img src={redux} alt="logo discorda" />
          <p>redux</p>
        </div>
        <div className="techstack-iconpack">
          <img src={discord} alt="logo discorda" />
          <p>discord</p>
        </div>
        <div className="techstack-iconpack">
          <img src={vsc} alt="logo discorda" />
          <p>v studio</p>
        </div>
        <div className="techstack-iconpack">
          <img src={redmine} alt="logo discorda" />
          <p>redmine</p>
        </div>
        <div className="techstack-iconpack">
          <img src={git} alt="logo discorda" />
          <p>git</p>
        </div>
      </div>
    </div>
  );
};
