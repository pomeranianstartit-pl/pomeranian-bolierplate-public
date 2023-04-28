import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { WelcomeViewRouterMetaData } from './WelcomeView/router-data';
import { CountClicksRouterMetaData } from './CountClicks/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  WelcomeViewRouterMetaData,
  CountClicksRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
