import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { NotFound } from '../Components/NotFound/NotFound';

import './styles.css';

export function FAQ() {
  return (
    <Routes>
      <Route path="" element={<FAQLayout />}>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function FAQLayout() {
  return (
    <div className="faq-main-container">
      <h1>FAQ</h1>
      <h5>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</h5>

      <div className="question-main-container">
        <div className='question-arrow'>&lt;</div><span>Jak mogę zapisać się na szkolenie?</span>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <br />
      <div className="question-main-container-1">
        <div className='question-arrow'>&lt;</div><span>Jak mogę zapisać się na szkolenie?</span>
      </div>
      <br />
      <div className="question-main-container-1">
        <div className='question-arrow'>&lt;</div><span>Jak mogę zapisać się na szkolenie?</span>
      </div>
      <br />
      <div className="question-main-container-1">
        <div className='question-arrow'>&lt;</div><span>Jak mogę zapisać się na szkolenie?</span>
      </div>
    </div>

  );
}
