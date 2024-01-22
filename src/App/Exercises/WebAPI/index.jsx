import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import {
  blockRouterData as webAPIRouterData,
  blockRouterMetaData as webAPIRouterMetaData,
} from './view-router-data';
import { ExerciseLinks } from './ExerciseLinks';

export function ApiExercises() {
  const element = useRoutes(webAPIRouterData);

  return (
    <div>
      <p>API i Asynchroniczność - ćwiczenia</p>
      <GoBackLink label="Zamknij" />

      <hr />

      <Routes>
        <Route path="" element={<ExerciseLinks />} />
      </Routes>

      {element}
    </div>
  );
}

export function ApiExercisesItem() {
  const element = useRoutes(webAPIRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    webAPIRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
