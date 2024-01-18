import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';
import { JsSavedInputMetaData } from './SavedInput/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';

export const blockRouterMetaData = [
  HitTheMoleMetaData,
  MemoGameMetaData,
  JsSavedInputMetaData,
  ToDoWithServerMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
