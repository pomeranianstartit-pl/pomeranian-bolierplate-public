import { Link } from 'react-router-dom';
import { Math } from '../Components/Icons/Math';
import './Projects.css';

export const Projects = () => {
  return (
    <div>
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;Projekty</p>
      </div>
      <h1>Projekty</h1>
      <div className="projects-tiles">
        <div>
          <p className="project-tile-title">Kalkulator</p>
          <div className="project-tile-image">
            <Math />
          </div>
          <p className="project-tile-description">Prosty kalkulator</p>
          <Link to="/projects/calculator">Zobacz projekt</Link>
        </div>
      </div>
    </div>
  );
};
