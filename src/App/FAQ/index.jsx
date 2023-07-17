import './styles.css';
import { SingleQuestion } from '../Components/SingleQuestion/SingleQuestion';
// dodać iterację//
export const FAQ = () => {
  return (
    <div>
      <div className="faq-block">
        <p>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</p>
        <ul className="faq-list">
          <li>
            <SingleQuestion
              question="Jak mogę zapisać się na szkolenie?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </li>
          <li>
            <SingleQuestion
              question="Jak nauczyć się programowania?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </li>
          <li>
            <SingleQuestion
              question="Jak zdać test?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </li>
          <li>
            <SingleQuestion
              question="Jak mogę zapisać się na szkolenie?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
