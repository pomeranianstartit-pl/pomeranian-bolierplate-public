import './styles.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../Components/NotFound/NotFound';

export const FAQ = () => {
  return (
    <Routes>
      <Route path="" element={<FAQLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
function FAQLayout() {
  return (
    <>
      <h1>FAQ</h1>
      <p className="faq-description">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
      <div className="faq-main-container">
        <div className="question-container">
          <h2>Jak mogę zapisać się na szkolenie?</h2>
          <div className="faq-answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
            suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
            aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
            tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
    </>
  );
}
