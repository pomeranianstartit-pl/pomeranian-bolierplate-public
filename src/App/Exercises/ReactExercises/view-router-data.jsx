import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactEventsUseStateMetaData } from './ReactEventsUseState/router-data';

import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
  ReactIfStatementsMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
