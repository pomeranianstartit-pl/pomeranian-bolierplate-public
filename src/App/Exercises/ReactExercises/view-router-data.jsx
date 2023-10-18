import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Event/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { NemoGameMetaData } from './NemoGame/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  hitTheMoleMetaData,
  NemoGameMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
