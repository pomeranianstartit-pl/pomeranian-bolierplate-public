import { Link } from 'react-router-dom';
// import codeSvg from './images/tiles/code.svg';
// import jsSvg from './images/tech-stack/js.svg';
// import reactSvg from './images/tech-stack/react.svg';
// import vscSvg from './images/tech-stack/vscode-alt 1.png';

export const Blocks = () => {
  const SeeMoreLink = (props) => {
    return <Link to={props.to}>Zobacz więcej</Link>;
  };

  return (
    <div className="dashboard-tiles-container">
      <h2>Hej Gosia!</h2>

      <div className="dashboard-tiles">
        <div>Moje CV</div>
        <div>Projekty</div>
        <div>Ćwiczenia</div>
        <div>Edukacja</div>
        <div>
          <p className="dashboard-tile-title">Tech stack</p>
          <img src={'codeSvg'} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Stack technologiczny realizowany na kursie
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>

        <div>Doświadczenie</div>
      </div>
    </div>
  );
};
