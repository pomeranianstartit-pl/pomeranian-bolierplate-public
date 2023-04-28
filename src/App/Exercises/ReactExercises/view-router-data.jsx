import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { Exercise1kRouterMetaData } from './Exercise1/router-data';
import { Exercise2RouterMetaData } from './Exercise2/router-data';
import { Exercise3RouterMetaData } from './Exercise3/router-data';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Exercise1kRouterMetaData,
  Exercise2RouterMetaData,
  Exercise3RouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
