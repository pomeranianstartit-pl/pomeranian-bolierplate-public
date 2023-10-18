import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { MemoMetaData } from './Memo/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  HitTheMoleMetaData,
  MemoMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
