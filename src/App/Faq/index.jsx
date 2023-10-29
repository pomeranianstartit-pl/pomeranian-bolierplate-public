import './faq.css';
import ArrowBotton from '../Images/chevron.down.svg';
import { SingleQuestion } from './SingleQuestion';

export function Faq() {
  return (
    <div className="faq">
      <h3>FAQ</h3>
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>

      <div className="faq-item">
        <div className="faq-header">
          <img src={ArrowBotton}></img>
          <h2 className="faq-title">Jak mogę zapisać się na szkolenie?</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="faq-item">
        <div className="faq-header">
          <img src={ArrowBotton}></img>
          <h2 className="faq-title">Jak mogę zapisać się na szkolenie?</h2>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-header">
          <img src={ArrowBotton}></img>
          <h2 className="faq-title">Jak mogę zapisać się na szkolenie?</h2>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-header">
          <img src={ArrowBotton}></img>
          <h2 className="faq-title">Jak mogę zapisać się na szkolenie?</h2>
        </div>
      </div>
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit"
      />
    </div>
  );
}
