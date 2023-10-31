import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { memoryGameMetaData } from './MemoryGame/router-data';
import { toDoWithServerMetaData } from './ToDoWithServer/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  hitTheMoleMetaData,
  memoryGameMetaData,
  toDoWithServerMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
