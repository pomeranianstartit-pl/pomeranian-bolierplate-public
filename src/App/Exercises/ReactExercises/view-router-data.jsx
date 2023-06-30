import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactRouterEventsMetaData } from '../ReactExercises/ReactRouterEvents/router-data';

import { Block9MetaData } from './Block9/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block9MetaData,
  MaterialUIBasicElementsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
