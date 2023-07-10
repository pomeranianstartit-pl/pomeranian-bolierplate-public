import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { routerMetaData as IfStatementsMetaData } from './IfStatements/router-data';

export const blockRouterMetaData = [
    SubRouteExampleMetaData,
    IfStatementsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
