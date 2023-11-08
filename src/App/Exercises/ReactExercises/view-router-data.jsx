import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { MemoMetaData } from './Memo/router-data';
import { ToDoServerMetaData } from './ToDoWithServer/router-data';
import { ToDoServerOneMetaData } from './ToDoServerOne/router-data';
import { FormMetaData } from './Form/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  HitTheMoleMetaData,
  MemoMetaData,
  ToDoServerMetaData,
  ToDoServerOneMetaData,
  FormMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
