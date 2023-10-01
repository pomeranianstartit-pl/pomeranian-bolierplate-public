import './faq.css';
import { SingleQuesion } from './SingleQuesion';

export function Faq() {
  return (
    <div className="faq">
      <img src="/_ FAQ.svg" alt="" />
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
      <div className="faq-item">
        <SingleQuesion
          quesion="Jak mogę zapisać się na szkolenie?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
        rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
        suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
        aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
        tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit."
        />
        <div className="faq-item-header">
          <img src="/Vector.svg" alt="" />
          <SingleQuesion quesion="Jak mogę zapisać się na szkolenie?" />
          <div className="faq-item-header">
            <img src="/Vector.svg" alt="" />
            <SingleQuesion quesion="Jak mogę zapisać się na szkolenie?" />
          </div>
        </div>
      </div>
    </div>
  );
}
