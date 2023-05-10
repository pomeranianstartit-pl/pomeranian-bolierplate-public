import './styles.css';
import { FAQSection } from '../Components/FAQSection/EmptyComponent';

export const FAQ = () => {
  return (
    <div>
      <div className="header">
        <h3>FAQ</h3>
        <p>tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</p>
        <FAQSection
          question={'Jak mogę zapisać się na szkolenie?'}
          answer={'To bardzo proste.'}
        />
        <FAQSection
          question={'Jak mogę zapisać się na szkolenie?'}
          answer={'To bardzo proste.'}
        />
        <FAQSection
          question={'Jak mogę zapisać się na szkolenie?'}
          answer={'To bardzo proste.'}
        />
      </div>
    </div>
  );
};
