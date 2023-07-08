import { codeSvg } from '../../Images/tiles/code';
import { Link } from 'react-router-dom';
export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      {' '}
      <h2>Hej Maciej!</h2>{' '}
      <div className="dashboard-tiles">
        {' '}
        <div>Moje CV</div> <div>Projekty</div> <div>Ćwiczenia</div>{' '}
        <div>Edukacja</div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Tech stack</p>{' '}
          {/* <img src={'../../Images/tiles/edit.svg' } alt="icon tech stack" />{' '} */}
          <p className="dashboard-tile-description">
            {' '}
            Stack technologiczny realizowany na kursie{' '}
          </p>{' '}
          <Link to="/dashboard/tech-stack">Zobacz więcej</Link>
          {/* <SeeMoreLink to="tech-stack" /> */}{' '}
        </div>{' '}
        <div>Doświadczenie</div>{' '}
      </div>{' '}
    </div>
  );
};
