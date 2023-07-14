import { Link, useNavigate } from 'react-router-dom';

import './styles.css';

export const GoBackLink = ({ label }) => {
  return (
    <Link to=".." relative="path">
      {label || 'Go Back'}
    </Link>
  );
};

export const GoBackButton = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>go back</button>;
};
