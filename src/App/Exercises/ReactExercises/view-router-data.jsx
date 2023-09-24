import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactOnClickMetaData } from './ReactOnClick/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
