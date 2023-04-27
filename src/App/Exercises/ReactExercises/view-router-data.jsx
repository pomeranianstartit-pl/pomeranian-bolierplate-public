import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { welcomeViewkRouterMetaData } from './WelcomeView/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeViewkRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
