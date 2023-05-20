import codeSvg from "../../Images/tiles/code.svg"
import personalCardSvg from "../../Images/tiles/personalcard.svg"
import editCardSvg from "../../Images/tiles/edit.svg"
import folder2Svg from "../../Images/tiles/folder-2.svg" 
import statusUpSvg from "../../Images/tiles/status-up.svg"
import teacherSvg from "../../Images/tiles/teacher.svg"

export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      {' '}
      <h2>Hej, tu Kamil!</h2>{' '}
      <div className="dashboard-tiles">
        {' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Moje CV</p>{' '}
          <img src={personalCardSvg} alt="icon my CV" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Podgląd CV{' '}
          </p>{' '}
        </div>{' '}

        <div>
          {' '}
          <p className="dashboard-tile-title">Projekty</p>{' '}
          <img src={folder2Svg} alt="icon projects" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Wykonane przeze mnie projekty{' '}
          </p>{' '}
        </div>{' '}
        
        <div>
          {' '}
          <p className="dashboard-tile-title">Ćwiczenia</p>{' '}
          <img src={editCardSvg} alt="icon exercises" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Wszystkie wykonane ćwiczenia{' '}
          </p>{' '}
        </div>{' '}

        <div>
          {' '}
          <p className="dashboard-tile-title">Edukacja</p>{' '}
          <img src={teacherSvg} alt="icon education" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Moja edukacja{' '}
          </p>{' '}
        </div>{' '}
        
        <div>
          {' '}
          <p className="dashboard-tile-title">Tech stack</p>{' '}
          <img src={codeSvg} alt="icon tech stack" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Stack technologiczny realizowany na kursie{' '}
          </p>{' '}
          {/* <SeeMoreLink to="tech-stack" /> */}{' '}
        </div>{' '}

        <div>
          {' '}
          <p className="dashboard-tile-title">Doświadczenie</p>{' '}
          <img src={statusUpSvg} alt="icon experience" />{' '}
          <p className="dashboard-tile-description">
            {' '}
            Moje doświadczenie{' '}
          </p>{' '}
        </div>{' '}

      </div>{' '}
    </div>
  );
};