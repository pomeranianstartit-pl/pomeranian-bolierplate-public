import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { JsExerciseItem, JsExercises } from './Js';
import { HtmlCssExercises, HtmlCssExerciseItem } from './HtmlCss';
import { Categories } from './Categories';
import { ReactExercises, ReactExercisesItem } from './ReactExercises';
import { NotFound } from '../Components/NotFound/NotFound';
import { Link } from 'react-router-dom';

import './styles.css';

export function Exercises() {
  return (
    <Routes>
      <Route path="" element={<BlockLayout />}>
        <Route
          path=""
          element={<p style={{ fontWeight: 700 }}>Wybierz kategorię</p>}
        />
        <Route path="html-css" element={<HtmlCssExercises />} />
        <Route path="js" element={<JsExercises />} />
        <Route path="react" element={<ReactExercises />} />
      </Route>
      <Route path="html-css/*" element={<HtmlCssExerciseItem />} />
      <Route path="js/*" element={<JsExerciseItem />} />
      <Route path="react/*" element={<ReactExercisesItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function BlockLayout() {
  return (
    <>
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;Ćwiczenia</p>
      </div>
      <h1>Ćwiczenia</h1>
      <p className="intro-exercises">
        W tej sekcji znajduje się większość ćwiczeń, które wykonałam podczas
        kursu. Dlaczego nie wszystkie? Ponieważ wiele ćwiczeń było wykonywanych
        "na roboczo", by wprowadzić do trudniejszego zagadnienia, w związku z
        czym te pierwsze próby nie były zapisywane. Bo czy warto chwalić się
        wyświetleniem "Hello World"?
        <br /> <br />W poniższej rozpisce przedstawione są więc te ważniejsze
        ćwiczenia. Nie są to rzeczy błyskotliwe, wyjątkowe czy też efektowne. To
        po prostu zapis ścieżki mojej nauki w czasie kursu - małe cegiełki, z
        których potem powstawały coraz większe projekty.
      </p>
      <div className="exercise-main-container">
        <Categories />
        <Outlet />
      </div>
    </>
  );
}
