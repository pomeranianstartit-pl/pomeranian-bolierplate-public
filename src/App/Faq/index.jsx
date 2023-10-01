import { SingleQuestion } from './SingleQuestion';
import './faq.css';
export function Faq() {
  return (
    <div className="Faq">
      <h3 className="Faq-button-return"> &#60; FAQ</h3>

      <p className="Faq-title">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
      {/* First question */}
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum
      ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in
      cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing
      adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque
      ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing
      elit"
      />

      <SingleQuestion question="Jak mogę zapisać się na szkolenie?" answer="" />

      <SingleQuestion question="Jak mogę zapisać się na szkolenie?" answer="" />

      <SingleQuestion question="Jak mogę zapisać się na szkolenie?" answer="" />
    </div>
  );
}
