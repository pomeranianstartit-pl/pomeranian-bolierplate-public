import { TechStackImage } from './TechStackImage';
import githuub from '../../Images/tech-stack/githuub.svg';
import discord from '../../Images/tech-stack/discord-icon-svgrepo-com 3.png';
import html from '../../Images/tech-stack/html.svg';
import jira from '../../Images/tech-stack/jira 1.png';
import js from '../../Images/tech-stack/js.svg';
import react from '../../Images/tech-stack/react.svg';
import redmine from '../../Images/tech-stack/redmine.png';
import redux from '../../Images/tech-stack/redux.png';
import ts from '../../Images/tech-stack/ts.svg';
import bitbucket from '../../Images/tech-stack/bitbucket.svg';
import firebase from '../../Images/tech-stack/firebase.svg';
import css from '../../Images/tech-stack/css 1.svg';
import vector from '../../Images/tech-stack/Vector.svg';
import git from '../../Images/tech-stack/git-1.svg';

import './styles.css';

export function TechStack() {
  return (
    <div>
      <h2>Techstack</h2>
      <div className="techstack">
        <div className="techstack-icons">
          <TechStackImage src={githuub} text="github" />
          <TechStackImage src={discord} text="discord" />
          <TechStackImage src={jira} text="jira" />
          <TechStackImage src={html} text="html" />
          <TechStackImage src={js} text="javascript" />
          <TechStackImage src={react} text="react" />
          <TechStackImage src={redmine} text="redmine" />
          <TechStackImage src={redux} text="redux" />
          <TechStackImage src={ts} text="typescript" />
          <TechStackImage src={bitbucket} text="bitbucket" />
          <TechStackImage src={firebase} text="firebase" />
          <TechStackImage src={css} text="css" />
          <TechStackImage src={vector} text="jest" />
          <TechStackImage src={git} text="git" />
        </div>
      </div>
    </div>
  );
}
