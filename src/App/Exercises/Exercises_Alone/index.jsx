import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import {
  blockRouterData as aloneBlockRouterData,
  blockRouterMetaData as aloneBlockRouterMetaData,
} from './view-router-data';
import { ExerciseLinks } from './ExerciseLinks';

export function AloneExercises() {
  const element = useRoutes(aloneBlockRouterData);

  return (
    <div>
      <p>HTML & CSS - lista ćwiczeń</p>
      <GoBackLink label="Zamknij" />

      <hr />

      <Routes>
        <Route path="" element={<ExerciseLinks />} />
      </Routes>

      {element}
    </div>
  );
}

export function AloneExerciseItem() {
  const element = useRoutes(aloneBlockRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    aloneBlockRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
