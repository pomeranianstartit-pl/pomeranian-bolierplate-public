import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReduxTestExample } from './ReduxTest/router-data';
import { ReduxCounterExample } from './ReduxCounter/router-data';
import { ReduxStealerExample } from './ReduxStealer/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReduxTestExample,
  ReduxCounterExample,
  ReduxStealerExample,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
