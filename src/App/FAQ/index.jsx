import './styles.css';
import { MasterHeader } from '../Components/MasterHeader';
import { SingleQuestion } from './SingleQuestion';

export const FAQ = () => {
  const uniwersalnaOdpowiedz = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum
  ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in
  cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing
  adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque
  ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing
  elit`;

  return (
    <div>
      <MasterHeader value="Faq" />
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
      <SingleQuestion
        button
        question="Jak mogę zapisać się na szkolenie?"
        answer={uniwersalnaOdpowiedz}
      />
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer={uniwersalnaOdpowiedz}
      />
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer={uniwersalnaOdpowiedz}
      />
    </div>
  );
};
