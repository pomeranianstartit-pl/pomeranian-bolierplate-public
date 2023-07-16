import './styles.css';
import { MasterHeader } from '../Components/MasterHeader/MasterHeader';
import { SingleQuestion } from './SingleQuestion';
import React from 'react';
export const Faq = () => {




  const uniwesalnaOdpowiedz = `                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release
                of Letraset sh`
  return (
    <div>
      <MasterHeader value="FAQ" />
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
      <SingleQuestion question='jak mam się zapisać' answer={uniwesalnaOdpowiedz} />
      <SingleQuestion question='jak mam się zapisać' answer={uniwesalnaOdpowiedz} />
      <SingleQuestion question='jak mam się zapisać' answer={uniwesalnaOdpowiedz} />
      <SingleQuestion question='jak mam się zapisać' answer={uniwesalnaOdpowiedz} />
    </div>
  );
};
