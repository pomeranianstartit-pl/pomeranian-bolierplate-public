import { Link } from 'react-router-dom';
import { CalculatorApp } from './CalculatorApp';
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
      <CalculatorApp />
    </div>
  );
};
