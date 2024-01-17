import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';
import { JsSavedInputMetaData } from './SavedInput/router-data';

export const blockRouterMetaData = [
  HitTheMoleMetaData,
  MemoGameMetaData,
  JsSavedInputMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
