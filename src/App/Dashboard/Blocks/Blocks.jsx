import { codeSvg } from "../../Images/tiles/code.svg"; 

export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      {' '}
      <h2>Hej tu Weronika!</h2>{' '}
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
          {/* <SeeMoreLink to="tech-stack" /> */}{' '}
        </div>{' '}
        <div>Doświadczenie</div>{' '}
      </div>{' '}
    </div>
  );
};