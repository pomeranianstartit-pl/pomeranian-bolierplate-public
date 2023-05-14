import './styles.css';
import { Arrow } from '../Components/Icons/Arrow';
import { FaqQuestionsItems } from '../Components/FaqQuestionsItems/FaqQuestionsItems';

export const FaQ = () => {
  return (
    <div className="dashboard">
      <Arrow />
      <h1 className="page-title">FaQ</h1>
      <p className="introduction">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
      <FaqQuestionsItems />
      <div className="border-close">
        <h2 className="question">Jak mogę zapisać sie na szkolenie?</h2>
      </div>
      <div className="border-close">
        <h2 className="question">Jak mogę zapisać sie na szkolenie?</h2>
      </div>
      <div className="border-close">
        <h2 className="question">Jak mogę zapisać sie na szkolenie?</h2>
      </div>
    </div>
  );
};
