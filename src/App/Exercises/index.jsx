import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Applications, ApplicationsItem } from './Applications';
import { JsExerciseItem, JsExercises } from './Js';
import { HtmlCssExercises, HtmlCssExerciseItem } from './HtmlCss';
import { Categories } from './Categories';
import { ReactExercises, ReactExercisesItem } from './ReactExercises';
import { NotFound } from '../Components/NotFound/NotFound';

import './styles.css';
import { ApiExercises, ApiExercisesItem } from './WebAPI';

export function Exercises() {
  return (
    <Routes>
      <Route path="" element={<BlockLayout />}>
        <Route path="" element={<p>Wybierz kategorie</p>} />
        <Route path="html-css" element={<HtmlCssExercises />} />
        <Route path="js" element={<JsExercises />} />
        <Route path="react" element={<ReactExercises />} />
        <Route path="web-api" element={<ApiExercises />} />
        <Route path="application" element={<Applications />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="html-css/*" element={<HtmlCssExerciseItem />} />
      <Route path="js/*" element={<JsExerciseItem />} />
      <Route path="react/*" element={<ReactExercisesItem />} />
      <Route path="web-api/*" element={<ApiExercisesItem />} />
      <Route path="application/*" element={<ApplicationsItem />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function BlockLayout() {
  return (
    <>
      <h1>Ćwiczenia</h1>
      <div className="exercise-main-container">
        <Categories />
        <Outlet />
      </div>
    </>
  );
}
