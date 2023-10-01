import './faq.css';
import { SingleQuestion } from './SingleQuestion';

export function Faq() {
  return (
    <div className="main">
      <h1 className="header"> &lt; FAQ</h1>
      <p className="p1">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
      <div className="akapit-lorem">
        <img src="/ikonka-rozwin.svg" alt="ikonka" />
        <div className="button-text">Jak mogę zapisać się na szkolenie?</div>
        <p className="p2-z-lorem ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </p>
      </div>
      <div>
        <div className="jak-moge-rozwijane">
          <img src="/ikonka.right.svg" alt="ikonka" />
          <p>Jak mogę zapisać się na szkolenie?</p>
        </div>
        <div className="jak-moge-rozwijane">
          <img src="/ikonka.right.svg" alt="ikonka" />
          <p>Jak mogę zapisać się na szkolenie?</p>
        </div>
        <div className="jak-moge-rozwijane">
          <img src="/ikonka.right.svg" alt="ikonka" />
          <p>Jak mogę zapisać się na szkolenie?</p>
        </div>
      </div>
    </div>
  );
}
