import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactEventsUseStateMetaData } from './ReactEventsUseState/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
