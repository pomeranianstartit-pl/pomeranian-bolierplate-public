import { Link } from 'react-router-dom';

import { blockRouterMetaData } from './view-router-data';

const ulStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

export const ExerciseLinks = () => {
  return (
    <ul style={ulStyle}>
      {blockRouterMetaData.map((blockMetaData) => (
        <li key={blockMetaData.path}>
          <Link to={blockMetaData.path}>{blockMetaData.linkLabel}</Link>
        </li>
      ))}
    </ul>
  );
};
