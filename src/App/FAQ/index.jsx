import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BackLink } from '../Components/GoBack/GoBack';
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
  const questionAnswerList = [
    {
      question: 'Czy aplikacja jest ukończona?',
      answer:
        'Nie, aplikacja jako narzędzie nauki może być uzupełniana i poprawiana w miarę zdobywania wiedzy',
    },
    {
      question: 'Czemu niektóre odnośniki nie mają funkcjonalności?',
      answer:
        'Projekt aplikacji zawierał wiele elementów które nie były zaplanowane do oprogramowania w trakcie kursu, makiety, z początku częściowe były wprowadzane stopniowo. Elementy służyły często do ćwiczeń jednego zagadnienia np. stylowania, różne metody pracy pokazywane przez trenerów dały szeroki przekrój wiedzy, ale prowadziły do niespójności w obrębie aplikacji i pozostawienia kilku "atrap" - kod dokumentuje proces uczenia się, więc rezygnuję z przepisywania większości aplikacji',
    },
    {
      question: 'Czemu konsola sypie komunikatami?',
      answer: 'Sporo ćwiczeń opiera się na wyświetlaniu w konsoli',
    },
    {
      question: 'Dlaczego część ćwiczeń nie działa?',
      answer:
        'Zadania oparte na lokalnym/zewnętrznym backendzie na razie nie działają -> docelowo fajnie będzie liznąć samodzielnego napisania prostego backendu / zrobienia dobrej konfiguracji',
    },
    {
      question: 'Po co te FAQ?',
      answer:
        'Kolejne ćwiczenie - które może zachęci do kontaktu ze mną i wymiany uwag :)',
    },
  ];
  return (
    <>
      <div className="faq-main-container">
        <h1>
          <BackLink label="&lt; FAQ" />
        </h1>
        <h5>
          Tutaj znajdźesz odpowiedzi na pytania związane z tym szkoleniowym
          projektem które sobie sam zadaję
        </h5>
        <div className="faq-wrapper">
          {questionAnswerList.map((qa, index) => {
            return (
              <dl key={'question' + index}>
                <dt className="faq-question">{qa.question}</dt>
                <dd className="faq-answer">{qa.answer}</dd>
              </dl>
            );
          })}
        </div>
      </div>
    </>
  );
}
