import './styles.css';
import Github from '../Images/tech-stack/githuub.svg';
import Jira from '../Images/tech-stack/jira.png';
import Js from '../Images/tech-stack/js.svg';
import Css from '../Images/tech-stack/css.svg';
import Html from '../Images/tech-stack/html.svg';
import ReactIcon from '../Images/tech-stack/react.svg';
import Git from '../Images/tech-stack/git.svg';
import VSC from '../Images/tech-stack/vscode.svg';
import Discord from '../Images/tech-stack/discord.svg';
import Python from '../Images/tech-stack/python.svg';
import Django from '../Images/tech-stack/django.svg';
import SQL from '../Images/tech-stack/sql.svg';
import Bitbucket from '../Images/tech-stack/bitbucket.svg';


import { MyIcon } from './SingleIcon';

export const TechStack = () => {
  return (
    <div>
      <div>
        <h3> {'<'} TECHSTACK</h3>
        <p>
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
          podczas kursu.{' '}
          <span className="atetnion">DODAĆ IKONKĘ DO SIDEBARA!</span>
        </p>
        <div className="techstack">
          <div className="techstack-icons">
            <MyIcon ImgSrc={Github} name={'github'} />
            <MyIcon ImgSrc={Jira} name={'jira'} />
            <MyIcon ImgSrc={Css} name={'CSS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Html} name={'html'} />
            <MyIcon ImgSrc={ReactIcon} name={'React'} />
            <MyIcon ImgSrc={Git} name={'Git'} />
            <MyIcon ImgSrc={VSC} name={'VS Code'} />
            <MyIcon ImgSrc={Discord} name={'Discord'} />
            <MyIcon ImgSrc={Python} name={'Python'} />
            <MyIcon ImgSrc={Django} name={'Django'} />
            <MyIcon ImgSrc={SQL} name={'SQL'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Bitbucket} name={'bitbucket'} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
