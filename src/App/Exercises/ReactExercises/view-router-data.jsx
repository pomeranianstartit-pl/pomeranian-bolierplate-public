import { MyCVRouterMetaData } from '../../MyCV/router-data';
import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { WelcomeViewRouterMetaData } from './WelcomeView/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  WelcomeViewRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
