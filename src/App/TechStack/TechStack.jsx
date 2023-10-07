import './styles.css';
import { SingleIcon } from './SingleIcon';
import Discord from '../Images/tech-stack/discord.png';
import Vector from '../Images/tech-stack/Vector.svg';
import Vector1 from '../Images/tech-stack/html.svg';
import Vector2 from '../Images/tech-stack/ts.svg';
import Vector3 from '../Images/tech-stack/js.svg';
import Vector4 from '../Images/tech-stack/react.svg';
import Vector5 from '../Images/tech-stack/githuub.svg';
import Vector6 from '../Images/tech-stack/bucket.svg';
import Vector7 from '../Images/tech-stack/jest.svg';
import Vector8 from '../Images/tech-stack/firebase.svg';
import Vector9 from '../Images/tech-stack/redux.png';
import Vector10 from '../Images/tech-stack/git.svg';
import Vector11 from '../Images/tech-stack/vscode.png';
import Vector12 from '../Images/tech-stack/jira 1.png';
import Vector13 from '../Images/tech-stack/redmine.png';

export function TechStack() {
  return (
    <div>
      <h1>TECHSTACK</h1>
      <p>
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczyłam się
        podczas kursu.
      </p>

      <div className="techstack">
        <div className="techstack-wrapper">
          <div className="techstack-box">
            <SingleIcon source={Vector} text="css" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector1} text="html" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector2} text="typescript" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector3} text="javascript" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector4} text="react" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector5} text="github" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector6} text="bitbucket" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector7} text="jest" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector8} text="firebase" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector9} text="redux" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector10} text="git" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector11} text="vscode" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Discord} text="Discord" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector12} text="jira" />
          </div>
          <div className="techstack-box">
            <SingleIcon source={Vector13} text="vreadmine" />
          </div>
        </div>{' '}
        <div></div>
      </div>
    </div>
  );
}
