import { Section } from './Section/Section';
import './faq.css';

export const FAQ = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <p>tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</p>

      <Section
        title="Jak mogę zapisać się na szkolenie?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
            suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
            aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
            tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit"
      />
      <Section
        title="Drugie pytanie?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
            suspendisse "
      />
      <Section
        title="Trzecie pytanie?"
        content="Viverra pretium
            tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit"
      />
    </div>
  );
};
