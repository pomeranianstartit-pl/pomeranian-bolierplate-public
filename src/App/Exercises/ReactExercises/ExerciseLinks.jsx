import { Link } from 'react-router-dom';

import { blockRouterMetaData } from './view-router-data';
import fileIcon from '../../Images/fileIcon.svg';

export const ExerciseLinks = () => {
  return (
    <ul>
      {blockRouterMetaData.map((blockMetaData) => (
        <li className="exercise-item-field" key={blockMetaData.path}>
          <Link className="exercise-item" to={blockMetaData.path} path>
            <img src={fileIcon} alt="ikona dla ćwiczenia" />
            <span className="exercise-label">{blockMetaData.linkLabel}</span>
            <div className="exercise-tags">
              {blockMetaData.tags.map((tag, index) => (
                <span key={index} className="exercise-tag">
                  {`${tag} `}
                </span>
              ))}
            </div>
            <span className="exercise-date">{blockMetaData.date}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
//styling in categories
//these components should be solved better not to be copied, I'm following these construction to publish app faster
