import './styles.css';
import line from '../../../Images/line.png';
import tic from '../../../Images/tic.svg';
import arrow from '../../../Images/arrow.svg';

export function Exercise() {
  return (
    <div className="faq">
      <h1 className="h1">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </h1>
      <ul>
        <li className="list-element1">
          <img alt="tik" className="tic" src={tic} />
          <span className="nazwa"> Jak mogę zapisać się na szkolenie?</span>
          <img alt="linia" className="linia" src={line} />
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
            suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
            aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
            tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
          </p>
        </li>
        <li className="list-element2">
          <img alt="strzałka" className="arrow" src={arrow} />
          <span className="nazwa">Jak mogę zapisać się na szkolenie?</span>
        </li>
        <li className="list-element2">
          <img alt="strzałka" className="arrow" src={arrow} />
          <span className="nazwa">Jak mogę zapisać się na szkolenie?</span>
        </li>
        <li className="list-element2">
          <img alt="strzałka" className="arrow" src={arrow} />
          <span className="nazwa">Jak mogę zapisać się na szkolenie?</span>
        </li>
      </ul>
    </div>
  );
}
