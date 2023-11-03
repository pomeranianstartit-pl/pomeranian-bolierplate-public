import './styles.css';
import Js from '../../Images/tech-stack/githuub.svg';
import jira from '../../Images/tech-stack/jira 1.png';
import { TechStackIcon } from './TechStackIcon';

export function TechStack() {
  return (
    <div>
      <h3>TECH STACK</h3>
      <p>
        Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem sie
        podczas kursu.
      </p>
      <div className="techstack">
        <div className="techstack-icons">
          <TechStackIcon ImgSrc={Js} name={'js'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
          <TechStackIcon ImgSrc={jira} name={'jira'} />
        </div>
      </div>
    </div>
  );
}
