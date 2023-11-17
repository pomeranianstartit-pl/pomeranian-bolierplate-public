import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { hitTheMole2MetaData } from './HitTheMole2/router-data';
import { memoMetaData } from './MemoryGame/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  hitTheMoleMetaData,
  hitTheMole2MetaData,
  memoMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
