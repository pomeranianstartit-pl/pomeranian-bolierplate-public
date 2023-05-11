import React from 'react';

import { FaqSection } from '../Components/FaqSection/FaqSection';

export const Faq = () => {
  return (
    <div>
      Tutaj znajdź odpowiedzi na najczęściej zadawane pytania:
      <FaqSection
        question="Jak mogę zapisać się na szkolenie?"
        answer=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
      rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
      suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
      aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
      tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
      amet, consectetur adipiscing elit"
      />
      <FaqSection
        question="Czy kurs jest online?"
        answer=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
      rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
      suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
      aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
      tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
      amet, consectetur adipiscing elit"
      />
      <FaqSection
        question="Czy mogę zrezygnować?"
        answer=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
      rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
      suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
      aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
      tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
      amet, consectetur adipiscing elit"
      />
    </div>
  );
};

export default Faq;
