import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { Exercise1kRouterMetaData } from './Exercise1/router-data';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { WelcomeViewRouterMetaData } from './WelcomeView/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Exercise1kRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
