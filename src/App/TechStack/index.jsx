import './styles.css';

import discord from '../Images/tech-stack/discord.png';
import githuub from '../Images/tech-stack/githuub.svg';
import html from '../Images/tech-stack/html.svg';
import jira1 from '../Images/tech-stack/jira 1.png';
import js from '../Images/tech-stack/js.svg';
import react from '../Images/tech-stack/react.svg';
import redmine from '../Images/tech-stack/redmine.png';
import redux from '../Images/tech-stack/redux.png';
import ts from '../Images/tech-stack/ts.svg';
import vscode from '../Images/tech-stack/vscode.png';
import css from '../Images/tech-stack/css.svg';
import bitbucket from '../Images/tech-stack/bitbucket.svg';

const data = [
  {
    title: 'CSS',
    image: <img src={css} />,
  },
  {
    title: 'html',
    image: <img src={html} />,
  },
  {
    title: 'typescript',
    image: <img src={ts} />,
  },
  {
    title: 'javascript',
    image: <img src={js} />,
  },
  {
    title: 'react',
    image: <img src={react} />,
  },
  {
    title: 'github',
    image: <img src={githuub} />,
  },
  {
    title: 'bitbucket',
    image: <img src={bitbucket} />,
  },
  {
    title: 'jest',
    image: '',
  },
  {
    title: 'firebase',
    image: '',
  },
  {
    title: 'redux',
    image: <img src={redux} />,
  },
  {
    title: 'git',
    image: '',
  },
  {
    title: 'vscode',
    image: <img src={vscode} />,
  },
  {
    title: 'discord',
    image: <img src={discord} />,
  },
  {
    title: 'jira',
    image: <img src={jira1} />,
  },
  {
    title: 'readmine',
    image: <img src={redmine} />,
  },
];

export const TechStack = () => {
  return (
    <div className="programs">
      <h2 className="programstechstack">{'<'}TechStack</h2>
      <p className="programstekst">
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
        podczas kursu.
      </p>
      <div className="data">
        {data.map(({ title, image }) => (
          <data title={title} image={image} />
        ))}
        ;
      </div>
    </div>
  );
};
