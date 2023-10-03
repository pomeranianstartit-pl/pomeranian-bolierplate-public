import './styles.css';
import CSS from '../Images/css.svg';
import HTML from '../Images/html.svg';
import TYPESCRIPT from '../Images/typescript.svg';
import JAVASCRIPT from '../Images/javascript.svg';
import REACT from '../Images/react.svg';
import GITHUB from '../Images/github.svg';
import BITBUCKET from '../Images/bitbucket.svg';
import JEST from '../Images/jest.svg';
import FIREBASE from '../Images/firebase.svg';
import REDUX from '../Images/redux.svg';
import GIT from '../Images/git.svg';
import VSCODE from '../Images/vscode.svg';
import DISCORD from '../Images/discord.svg';
import JIRA from '../Images/jira.svg';
import READMINE from '../Images/readmine.svg';

export const Techstack = () => {
  return (
    <div className="Techstack">
      <div>
        <h1 className="Techstack-greeting">{'<'} TECH STACK</h1>
        <p className="Techstack-description">
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
          podczas kursu.
        </p>
      </div>
      <div>
        <div className="Techstack-cards">
          <div>
            <img className="x" src={CSS} alt="css" width="90px" height="90px" />
            <p>CSS</p>
          </div>
          <div>
            <img
              className="x"
              src={HTML}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>HTML</p>
          </div>
          <div>
            <img
              className="x"
              src={TYPESCRIPT}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>TypeScript</p>
          </div>
          <div>
            <img
              className="x"
              src={JAVASCRIPT}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>JavaScript</p>
          </div>
          <div>
            <img
              className="x"
              src={REACT}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>React</p>
          </div>
          <div>
            <img
              className="x"
              src={GITHUB}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>Github</p>
          </div>
          <div>
            <img
              className="x"
              src={BITBUCKET}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>BitBucket</p>
          </div>
          <div>
            <img
              className="x"
              src={JEST}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>Jest</p>
          </div>
          <div>
            <img
              className="x"
              src={FIREBASE}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>Firebase</p>
          </div>
          <div>
            <img
              className="x"
              src={REDUX}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>Redux</p>
          </div>
          <div>
            <img className="x" src={GIT} alt="css" width="90px" height="90px" />
            <p>Git</p>
          </div>
          <div>
            <img
              className="x"
              src={VSCODE}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>Vscode</p>
          </div>
          <div>
            <img
              className="x"
              src={DISCORD}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>Discord</p>
          </div>
          <div>
            <img
              className="x"
              src={JIRA}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>Jira</p>
          </div>
          <div>
            <img
              className="x"
              src={READMINE}
              alt="css"
              width="90px"
              height="90px"
            />
            <p>Readmine</p>
          </div>
        </div>
      </div>
    </div>
  );
};
