import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { JsExerciseItem, JsExercises } from './Js';
import { HtmlCssExercises, HtmlCssExerciseItem } from './HtmlCss';
import { Categories } from './Categories';
import { ReactExercises, ReactExercisesItem } from './ReactExercises';
import { NotFound } from '../Components/NotFound/NotFound';

import './styles.css';

export function Exercises() {
  return (
    <Routes>
      <Route path="" element={<BlockLayout />}>
        <Route path="" element={<p>Select categories</p>} />
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
      <h1>Exercises</h1>
      <div className="exercise-main-container">
        <Categories />
        <Outlet />
      </div>
    </>
  );
}
