import { Link } from 'react-router-dom';

export const Calculator = () => {
  return (
    <div>
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;</p>
        <Link to="/projects">Projekty</Link>
        <p>&nbsp;&gt;&nbsp;Kalkulator</p>
      </div>
      <h1>Kalkulator</h1>
    </div>
  );
};
