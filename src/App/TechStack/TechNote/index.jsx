import { useState } from 'react';

import discord from '../../Images/tech-stack/discord.png';
import githuub from '../../Images/tech-stack/githuub.svg';
import html from '../../Images/tech-stack/html.svg';
import jira1 from '../../Images/tech-stack/jira 1.png';
import js from '../../Images/tech-stack/js.svg';
import react from '../../Images/tech-stack/react.svg';
import redmine from '../../Images/tech-stack/redmine.png';
import redux from '../../Images/tech-stack/redux.png';
import ts from '../../Images/tech-stack/ts.svg';
import vscode from '../../Images/tech-stack/vscode.png';
import css from '../../Images/tech-stack/css.svg';
import bitbucket from '../../Images/tech-stack/bitbucket.svg';
import jest from '../../Images/tech-stack/jest.svg';
import firebase from '../../Images/tech-stack/firebase.svg';
import git from '../../Images/tech-stack/git.svg';

export function TechNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  return (
    <div className="tech-note-wrapper" onClick={handleButton}>
      <div className="oneprogram">
        <div>{props.image}</div>
      </div>
      <p>{props.title}</p>
      {display && (
        <div>
          {' '}
          <hr></hr>
          <p></p>
        </div>
      )}
    </div>
  );
}
