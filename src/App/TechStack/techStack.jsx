import './styles.css';
import CssIcon from '../Images/tech-stack/css-icon.svg';
import HtmlIcon from '../Images/tech-stack/html.svg';
import TypeScriptIcon from '../Images/tech-stack/ts.svg';
import JavascriptIcon from '../Images/tech-stack/js.svg';
import ReactIcon from '../Images/tech-stack/react.svg';
import Githuub from '../Images/tech-stack/githuub.svg';
import BitBucketIcon from '../Images/tech-stack/bit-bucket.svg';
import JestIcon from '../Images/tech-stack/jest-icon.svg';
import FirebaseIcon from '../Images/tech-stack/firebase-icon.svg';
import ReduxIcon from '../Images/tech-stack/redux.png';
import GitIcon from '../Images/tech-stack/git-icon.svg';
import VscodeIcon from '../Images/tech-stack/vscode-alt 1.png';
import DiscordIcon from '../Images/tech-stack/discord-icon-svgrepo-com 3.png';
import JiraIcon from '../Images/tech-stack/jira 1.png';
import Readmine from '../Images/tech-stack/frame35381.svg';
import { TechStackIcon } from './TechStackIcon';
import { format } from 'prettier';

export function TechStack() {
  return (
    <>
      <h2>Techstack</h2>
      <p>Poniżej znajdziesz Techstack</p>
      <div className="techstack">
        <div className="techstack-icons">
          <TechStackIcon ImgSrc={CssIcon} name={'css'} />
          <TechStackIcon ImgSrc={HtmlIcon} name={'html'} />
          <TechStackIcon ImgSrc={TypeScriptIcon} name={'typescript'} />
          <TechStackIcon ImgSrc={JavascriptIcon} name={'javascript'} />
          <TechStackIcon ImgSrc={ReactIcon} name={'react'} />
          <TechStackIcon ImgSrc={Githuub} name={'github'} />
          <TechStackIcon ImgSrc={BitBucketIcon} name={'bitbucket'} />
          <TechStackIcon ImgSrc={JestIcon} name={'jest'} />
          <TechStackIcon ImgSrc={FirebaseIcon} name={'firebase'} />
          <TechStackIcon ImgSrc={ReduxIcon} name={'redux'} />
          <TechStackIcon ImgSrc={GitIcon} name={'git'} />
          <TechStackIcon ImgSrc={VscodeIcon} name={'vscode'} />
          <TechStackIcon ImgSrc={DiscordIcon} name={'discord'} />
          <TechStackIcon ImgSrc={JiraIcon} name={'jira'} />
          <TechStackIcon ImgSrc={Readmine} name={'readmine'} />
        </div>
      </div>
    </>
  );
}
