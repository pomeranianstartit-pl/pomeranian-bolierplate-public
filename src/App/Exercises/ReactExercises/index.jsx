import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import { ExerciseLinks } from './ExerciseLinks';
import {
  blockRouterData as reactBlockRouterData,
  blockRouterMetaData as reactBlockRouterMetaData,
} from './view-router-data';

export function ReactExercises() {
  const element = useRoutes(reactBlockRouterData);

  return (
    <div>
      <p style={{ fontWeight: 700 }}>React - lista ćwiczeń</p>
      <GoBackLink label="Zamknij" />

      <hr />
      <div className="exercise-links">
        <Routes>
          <Route path="" element={<ExerciseLinks />} />
        </Routes>
      </div>

      {element}
    </div>
  );
}

export function ReactExercisesItem() {
  const element = useRoutes(reactBlockRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    reactBlockRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
