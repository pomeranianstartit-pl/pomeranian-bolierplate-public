import './faq.css';
import { SingleQuestion } from './singleQuestion';
// import '../../../public/icons/chevron.down.svg'

export function FAQ() {
  return (
    <div>
      <h3 className="mainTitle">FAQ</h3>
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
    rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
    suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
    aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
    tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
    amet, consectetur adipiscing elit"
      />
      <SingleQuestion
        question="Warum sind Die Katzen Einzelgänger?"
        answer="Die Katzen sind Einzelganger Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
    rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
    suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
    aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
    tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
    amet, consectetur adipiscing elit"
      />
      <button className="button button-red">button</button>
    </div>
  );
}
