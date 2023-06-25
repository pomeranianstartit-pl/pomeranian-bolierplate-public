import './styles.css';
import cssSVG from '../Images/tech-stack/CSS.svg';
import htmlSVG from '../Images/tech-stack/html.svg';
import tsSVG from '../Images/tech-stack/ts.svg';
import jsSVG from '../Images/tech-stack/js.svg';
import reactSVG from '../Images/tech-stack/react.svg';
import githubSVG from '../Images/tech-stack/githuub.svg';
import firebaseSVG from '../Images/tech-stack/firebase.svg';
import jiraSVG from '../Images/tech-stack/jira.svg';
import bitbucketSVG from '../Images/tech-stack/bitbucket.svg';
import reduxSVG from '../Images/tech-stack/redux.svg';
import discordSVG from '../Images/tech-stack/discord.svg';
import vscSVG from '../Images/tech-stack/vsc.svg';
import readmineSVG from '../Images/tech-stack/readmine.svg';
import gitSVG from '../Images/tech-stack/git.svg';

export const TechStack = () => {
  return (
    <div>
      <h1>Techstack</h1>
      <h5>
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
        podczas kursu
      </h5>
      <div className=" wrapper">
        <div className="techstack-icons-pack">
          <img src={cssSVG} alt="css"></img>
          <p className="techStackName">css</p>
        </div>

        <div className="techstack-icons-pack">
        <img src={htmlSVG} alt="html"></img>
        <p className="techStackName">html</p>
      </div>

      <div className="techstack-icons-pack">
        <img src={tsSVG} alt="ts"></img>
        <p className="techStackName">type script</p>
      </div>

      <div className="techstack-icons-pack">
        <img src={jsSVG} alt="js"></img>
        <p className="techStackName">java script</p>
      </div>

      <div className="techstack-icons-pack">
        <img src={reactSVG} alt="react"></img>
        <p className='techStackName'>react</p>
      </div>


        <div className="techstack-icons-pack">
      <img src={githubSVG} alt="github"></img>
      <p className='techStackName'>git hub</p>
      </div>
      

      <div className="techstack-icons-pack">
        <img src={firebaseSVG} alt="firebase"></img>
        <p className='techStackName'>firebase</p>
      </div>

      <div className="techstack-icons-pack">
      <img src={jiraSVG} alt="jira"></img>
      <p className='techStackName'>jira</p>
      </div>

      <div className="techstack-icons-pack">
      <img src={bitbucketSVG} alt="bitbucket"></img>
      <p className='techStackName'>bitbucket</p>
      </div>
      
      <div className="techstack-icons-pack">
      <img src={reduxSVG} alt="redux"></img>
      <p className='techStackName'>redux</p>
      </div>

      <div className="techstack-icons-pack">
<img className="discord" src={discordSVG} alt="discord"></img>
      <p className='techStackName'>discord</p>
      </div>

      <div className="techstack-icons-pack">
      <img  src={vscSVG} alt="vsc"></img>
      <p className='techStackName'>v studio</p>
      </div>

      <div className="techstack-icons-pack">
      <img src={readmineSVG} alt="readmine"></img>
      <p className='techStackName'>readmine</p>
      </div>
      <div className="techstack-icons-pack">
      <img className="git" src={gitSVG} alt="git"></img>
      <p className='techStackName'>git</p>
      </div>

    </div>

    </div>
  );
};
