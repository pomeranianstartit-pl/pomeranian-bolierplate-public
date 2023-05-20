import './styles.css';
import png from '../Images/tech-stack/discord.svg';
import svg from '../Images/tech-stack/githuub.svg';
import html from '../Images/tech-stack/html.svg';
import jira from '../Images/tech-stack/jira.svg';
import js from '../Images/tech-stack/js.svg';
import react from '../Images/tech-stack/react.svg';
import redmine from '../Images/tech-stack/readmine.svg';
import redux from '../Images/tech-stack/redux.svg';
import ts from '../Images/tech-stack/ts.svg';
import vscode from '../Images/tech-stack/vscode.svg';
import css from '../Images/tech-stack/CSS.svg';
export const TechStack = () => {
  return (
    <div className="wrapper">
      <p className="title">
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
        podczas kursu
      </p>
      <div className="img">
        <img src={png} /> <br /> discord
      </div>
      <div className="img">
        <img src={svg} /> <br /> gitHub
      </div>
      <div className="img">
        <img src={html} /> <br /> html
      </div>
      <div className="img">
        <img src={css} /> <br />
        CSS
      </div>
      <div className="img">
        <img src={jira} />
        <br /> jira
      </div>
      <div className="img">
        <img src={js} />
        <br /> java script
      </div>
      <div className="img">
        <img src={react} />
        <br /> react
      </div>
      <div className="img">
        <img src={redmine} />
        <br /> readmine
      </div>
      <div className="img">
        <img src={redux} />
        <br /> redux
      </div>
      <div className="img">
        <img src={ts} />
        <br /> typescript
      </div>
      <div className="img">
        <img src={vscode} />
        <br /> v studio
      </div>
    </div>
  );
};
