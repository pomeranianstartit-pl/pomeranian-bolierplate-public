import { Link } from 'react-router-dom';
import personalcard from '../../Images/tiles/personalcard.svg';
import code from '../../Images/tiles/code.svg';
import edit from '../../Images/tiles/edit.svg';
import blog from '../../Images/tiles/blog.svg';
import faq from '../../Images/tiles/faq.svg';

// import jsSvg from './images/tech-stack/js.svg';
// import reactSvg from './images/tech-stack/react.svg';
// import vscSvg from './images/tech-stack/vscode-alt 1.png';

export const Blocks = () => {
  const SeeMoreLink = (props) => {
    return <Link to={props.to}>Zobacz więcej</Link>;
  };

  return (
    <div className="dashboard-tiles-container">
      <h2>Hej, tu Nikolas!</h2>

      <div className="dashboard-tiles">
        <div>
          <p className="dashboard-tile-title">Moje CV</p>
          <img src={personalcard} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            podgląd cv wraz z doświadczeniem
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>

        <div>
          <p className="dashboard-tile-title">Ćwiczenia</p>
          <img src={edit} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Wszystkie wykonane ćwiczenia
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>

        <div>
          <p className="dashboard-tile-title">Blog</p>
          <img src={blog} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            wpisy blogowe o technologii front-end
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>

        <div>
          <p className="dashboard-tile-title">Tech stack</p>
          <img src={code} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            stack technologiczny realizowany na kursie
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>

        <div>
          <p className="dashboard-tile-title">FAQ</p>
          <img src={faq} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            odpowiedzi na najczęstrze pytania
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>
      </div>
    </div>
  );
};
