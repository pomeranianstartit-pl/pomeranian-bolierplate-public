import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';

import { Block09MetaData } from './Block09/router-data';

import { MuiMetaData } from './Mui/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  MuiMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
