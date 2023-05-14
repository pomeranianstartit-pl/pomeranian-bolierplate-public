import './styles.css';
import { FaqQuestionsItems } from '../Components/FaqQuestionsItems/FaqQuestionsItems';

export const FaQ = () => {
  return (
    <div className="dashboard">
      <h1 className="page-title">&lt; FaQ</h1>
      <p className="introduction">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
      <FaqQuestionsItems />
    </div>
  );
};
