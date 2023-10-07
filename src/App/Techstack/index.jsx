import { SingleIcon } from './SingleIcon';
import './styles.css';
import Vector from '../Images/tech-stack/Vector.svg';
import HtmlIcon from '../Images/tech-stack/html.svg';
import TypeScriptIcon from '../Images/tech-stack/ts.svg';
import JavaScriptIcon from '../Images/tech-stack/js.svg';
import ReactIcon from '../Images/tech-stack/react.svg';
import GitHubIcon from '../Images/tech-stack/githuub.svg';
import RedmineIcon from '../Images/tech-stack/redmine.png';
import JiraIcon from '../Images/tech-stack/jira 1.png';
import VsCodeIcon from '../Images/tech-stack/vscode-alt 1.png';
import ReduxIcon from '../Images/tech-stack/redux.png';

export function Techstack() {
  return (
    <div className="techstack">
      TECH STACK
      <p>
        Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczylem się
        podczas kursu.
      </p>
      <div className="gridWrapper">
        <SingleIcon source={Vector} text="css" />
        <SingleIcon source={HtmlIcon} text="html" />
        <SingleIcon source={TypeScriptIcon} text="typescript" />
        <SingleIcon source={JavaScriptIcon} text="javascript" />
        <SingleIcon source={ReactIcon} text="react" />
        <SingleIcon source={GitHubIcon} text="github" />
        <SingleIcon source={Vector} text="bitbucket" />
        <SingleIcon source={Vector} text="jest" />
        <SingleIcon source={Vector} text="firebase" />
        <SingleIcon source={ReduxIcon} text="redux" />
        <SingleIcon source={Vector} text="git" />
        <SingleIcon source={VsCodeIcon} text="vscode" />
        <SingleIcon source={Vector} text="discord" />
        <SingleIcon source={JiraIcon} text="jira" />
        <SingleIcon source={RedmineIcon} text="readmine" />
        <div className="rightPanel"> </div>
      </div>
    </div>
  );
}
