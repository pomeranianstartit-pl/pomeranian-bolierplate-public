import './style.css';
import { SingleIcon } from './SingleIcon';
import HTMLlogo from '../Images/tech-stack/html.svg';
import CSSLogo from '../Images/tech-stack/CSSLOGO.svg';
import TypeScriptLOGO from '../Images/tech-stack/TypeScriptLOGO.svg';
import JavaScriptLOGO from '../Images/tech-stack/JavaScriptLOGO.svg';
import ReactLOGO from '../Images/tech-stack/react.svg';
import githubLOGO from '../Images/tech-stack/githuub.svg';
import bitbucketLogo from '../Images/tech-stack/Group.svg';
import reduxlogo from '../Images/tech-stack/reduxlogo.svg';
import jestlogo from '../Images/tech-stack/jestlogo.svg';
import firebaselogo from '../Images/tech-stack/firebaselogo.svg';
import gitLogo from '../Images/tech-stack/gitLOGO.svg';
import vscode from '../Images/tech-stack/vscodelogo.svg';
import discordlogo from '../Images/tech-stack/discordlogo.svg';
import jiralogo from '../Images/tech-stack/jiralogo.svg';
import readminelogo from '../Images/tech-stack/readminelogo.svg';

export function TechStack() {
  return (
    <div>
      <h5>TECH STACK</h5>
      <p>
        Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem się
        podczas kursu.
      </p>
      <div className="TechStack_grid_container">
        <SingleIcon src={CSSLogo} text="CSS" />
        <SingleIcon src={HTMLlogo} text="HTML" />
        <SingleIcon src={TypeScriptLOGO} text="typescript" />
        <SingleIcon src={JavaScriptLOGO} text="javascript" />
        <SingleIcon src={ReactLOGO} text="react" />
        <SingleIcon src={githubLOGO} text="github" />
        <SingleIcon src={bitbucketLogo} text="bitbucket" />
        <SingleIcon src={jestlogo} text="jest" />
        <SingleIcon src={firebaselogo} text="firebase" />
        <SingleIcon src={reduxlogo} text="redux" />
        <SingleIcon src={gitLogo} text="git" />
        <SingleIcon src={vscode} text="vscode" />
        <SingleIcon src={discordlogo} text="discord" />
        <SingleIcon src={jiralogo} text="jira" />
        <SingleIcon src={readminelogo} text="readmine" />
      </div>
    </div>
  );
}
