import { Link, useNavigate } from 'react-router-dom';

import './styles.css';

export const GoBackLink = ({ label }) => {
  return (
    <Link to=".." relative="path">
      {label || 'Cofnij'}
    </Link>
  );
};

export const GoBackButton = ({ buttonTitle = 'go back', className = '' }) => {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate(-1)}>
      {buttonTitle}
    </button>
  );
};
