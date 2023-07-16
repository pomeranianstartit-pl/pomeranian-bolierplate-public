import './styles.css';
import { MasterHeader } from '../Components/MasterHeader/MasterHeader';
import { SingleQuestion } from './SingleQuestion';
import React from 'react';

export const Faq = () => {
  const uniwesalnaOdpowiedz = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit`;
  return (
    <div>
      <MasterHeader value="FAQ" />
      <p>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</p>
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer={uniwesalnaOdpowiedz}
      />

      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer={uniwesalnaOdpowiedz}
      />
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer={uniwesalnaOdpowiedz}
      />
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer={uniwesalnaOdpowiedz}
      />
    </div>
  );
};
