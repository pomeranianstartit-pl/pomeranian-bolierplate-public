import { Link, useNavigate } from 'react-router-dom';

import './styles.css';

export const GoBackLink = ({ label }) => {
  return (
    <Link to=".." relative="path">
      {label || 'Cofnij'}
    </Link>
  );
};

export const GoBackButton = ({ buttonTitle = 'go back' }) => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>{buttonTitle}</button>;
};
