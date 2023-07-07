import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { routerMetaData as IfStatementsMetaData } from './IfStatements/router-data';
import { routerMetaData as IfStatementsMoreOrLess } from './IfStatementsMoreOrLess/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  IfStatementsMetaData,
  IfStatementsMoreOrLess,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
