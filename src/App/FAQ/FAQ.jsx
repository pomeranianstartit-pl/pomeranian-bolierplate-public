import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../Components/NotFound/NotFound';
import './styles.css';

export function FAQ() {
  return (
    <Routes>
      <Route path="" element={<FAQLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function FAQLayout() {
  return (
    <>
      
  <div className="faq-main-container">
      
  <h1>FAQ</h1>
  <h5>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</h5>

<div className='border-box'>

  <div className="blocktext">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit 
  
  </div>
  </div>
  </div>
      
    </>
  );
}
