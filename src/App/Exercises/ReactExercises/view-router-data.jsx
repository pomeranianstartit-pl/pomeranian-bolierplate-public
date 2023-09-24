import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterData } from './ReactOnCLick/router-data';
import { ReactOnChangeRouterData } from './ReactOnChange/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterData,
  ReactOnChangeRouterData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
