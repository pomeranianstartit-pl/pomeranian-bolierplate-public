import './styles.css';

import snowWolf from '../../../Images/snow-wolf.png';

export const CSSFilter = () => {
  return (
    <div>
      <h2>Filtry w CSS</h2>
      <p>
        Link do generatora filtrów{' '}
        <a href="https://cssgenerator.org/filter-css-generator.html">
          generator
        </a>
      </p>
      Examples:
      <ul>
        <li>
          <img className="css-filter-1" src={snowWolf} alt="snow wolf" />
        </li>
        <li>
          <img className="css-filter-2" src={snowWolf} alt="snow wolf" />
        </li>
        <li>
          <img className="css-filter-3" src={snowWolf} alt="snow wolf" />
        </li>
      </ul>
    </div>
  );
};
