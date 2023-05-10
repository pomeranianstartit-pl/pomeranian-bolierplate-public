import { FAQSection } from '../Components/FAQSection/FAQSection';
import './styles.css';

export const FAQ = () => {
  return (
    <div>
      <div>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania:</div>
      <div className="faq-section">
        <div className="question">Jak mogę zapisać się na szkolenie?</div>
        <hr />
        <div className="answer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>
      <FAQSection question={'Jak anulować subskrypcję?'} answer={'Nie można'} />
    </div>
  );
};
