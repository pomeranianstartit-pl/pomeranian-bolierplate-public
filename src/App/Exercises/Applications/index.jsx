import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import {
  blockRouterData as applicationsRouterData,
  blockRouterMetaData as applicationsRouterMetaData,
} from './view-router-data';
import { ExerciseLinks } from './ExerciseLinks';

export function Applications() {
  const element = useRoutes(applicationsRouterData);

  return (
    <div>
      <p>Większe aplikacje </p>
      <GoBackLink label="Zamknij" />

      <hr />

      <Routes>
        <Route path="" element={<ExerciseLinks />} />
      </Routes>

      {element}
    </div>
  );
}

export function ApplicationsItem() {
  const element = useRoutes(applicationsRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    applicationsRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
