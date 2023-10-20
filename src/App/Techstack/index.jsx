import TechStackIcon from './TechStackIcon';

import './style.css';

import html from '../Images/tech-stack/html.svg';
import redmine from '../Images/tech-stack/redmine.png';
import react from '../Images/tech-stack/react.svg';
import js from '../Images/tech-stack/js.svg';
import jira from '../Images/tech-stack/jira 1.png';
import discord from '../Images/tech-stack/discord-icon-svgrepo-com 3.png';
import redux from '../Images/tech-stack/redux.png';
import ts from '../Images/tech-stack/ts.svg';
import vscode from '../Images/tech-stack/vscode-alt 1.png';
import githuub from '../Images/tech-stack/githuub.svg';

// itd...

export function Techstack() {
  return (
    <>
      <h1>Technologie</h1>
      <div className="techstack">
        <div className="techstack-icons">
          <TechStackIcon img={discord} name="HTML5" />
          <TechStackIcon img={html} name="HTML5" />
          <TechStackIcon img={jira} name="HTML5" />
          <TechStackIcon img={js} name="HTML5" />
          <TechStackIcon img={react} name="HTML5" />
          <TechStackIcon img={redmine} name="HTML5" />
          <TechStackIcon img={redux} name="HTML5" />
          <TechStackIcon img={ts} name="HTML5" />
          <TechStackIcon img={vscode} name="HTML5" />
          <TechStackIcon img={githuub} name="HTML5" />
          <TechStackIcon img={html} name="HTML5" />
          <TechStackIcon img={html} name="HTML5" />
          <TechStackIcon img={html} name="HTML5" />
          <TechStackIcon img={html} name="HTML5" />
        </div>
      </div>
    </>
  );
}
