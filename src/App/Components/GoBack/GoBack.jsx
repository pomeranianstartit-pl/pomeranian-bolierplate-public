import { Link, useNavigate } from 'react-router-dom';

import './styles.css';

export const GoBackLink = ({ label }) => {
  return (
    <Link to=".." relative="path">
      {label || 'Cofnij'}
    </Link>
  );
};

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="app-button" onClick={() => navigate(-1)}>
      Cofnij
    </button>
  );
};

export const BackLink = ({ label }) => {
  const navigate = useNavigate();

  return (
    <Link className="back-link" onClick={() => navigate(-1)}>
      {label || 'Back'}
    </Link>
  );
};
