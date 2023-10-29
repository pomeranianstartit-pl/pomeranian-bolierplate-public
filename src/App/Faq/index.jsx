import { SingleQuestionFaq } from './SingleQuestionFaq';
import './faq.css';

export function Faq() {
  return (
    <div className="faq-style">
      <h1>Faq</h1>
      <div className="wstep">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </div>
      <div>
        <SingleQuestionFaq
          question="Jak mogę zapisać się na szkolenie?"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
    rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
    suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
    aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
    tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit"
        />
      </div>
      <div className="question-1">
        <img className="button-text-up" src="../chevron.right.svg" alt="" />
        <h3 className="button-text">Jak mogę zapisać się na szkolenie?</h3>
      </div>
      <div className="question-1">
        <img className="button-text-up" src="../chevron.right.svg" alt="" />
        <h3 className="button-text">Jak mogę zapisać się na szkolenie?</h3>
      </div>
      <div className="question-1">
        <img className="button-text-up" src="../chevron.right.svg" alt="" />
        <h3 className="button-text">Jak mogę zapisać się na szkolenie?</h3>
      </div>
    </div>
  );
}
