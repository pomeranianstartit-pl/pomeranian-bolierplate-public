import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import { ExerciseLinks } from './ExerciseLinks';
import {
  blockRouterData as jsBlockRouterData,
  blockRouterMetaData as jsBlockRouterMetaData,
} from './view-router-data';

export function JsExercises() {
  const element = useRoutes(jsBlockRouterData);

  return (
    <div>
      <p>Java Script</p>
      <GoBackLink label="Close" />

      <hr />

      <Routes>
        <Route path="" element={<ExerciseLinks />} />
      </Routes>

      {element}
    </div>
  );
}

export function JsExerciseItem() {
  const element = useRoutes(jsBlockRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    jsBlockRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
