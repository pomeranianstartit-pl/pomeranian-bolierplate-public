import './Faq.css';
import { SingleQuestion } from './SingleQuestion';
export function Faq() {
  return (
    <div className="Faq">
      <b>FAQ</b>
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>

      <div className="faq-item">
        <div className="faq-item-header">
          <img src="/Ikony/chevron.svg" alt="" />
          <h2 className="faq-item-title">Jak mogę zapisać się na szkolenie?</h2>
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
      <SingleQuestion
        question="Jak moge zapisać się an szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <SingleQuestion
        question="Jak moge zapisać się an szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>
  );
}
