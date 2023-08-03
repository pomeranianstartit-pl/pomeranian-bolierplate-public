import { MyCVRouterMetaData } from '../../MyCV/router-data';
import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { WelcomeViewRouterMetaData } from './WelcomeView/router-data';
import { Exercise1kRouterMetaData } from './Exercise1/router-data';
import { Exercise2RouterMetaData } from './Exercise2/router-data';
import { Exercise3RouterMetaData } from './Exercise3/router-data';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  WelcomeViewRouterMetaData,
  Exercise1kRouterMetaData,
  Exercise2RouterMetaData,
  Exercise3RouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
