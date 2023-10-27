import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterData } from './ReactOnCLick/router-data';
import { ReactOnChangeRouterData } from './ReactOnChange/router-data';
import { ReactIfStatementMetaData } from './ReactIfStatement/router-data';
import { ReactGuessNumberMetaData } from './ReactGuessNumber/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMole } from './HitTheMole/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterData,
  ReactOnChangeRouterData,
  ReactIfStatementMetaData,
  ReactGuessNumberMetaData,
  blockRouterMetaDataHitTheMole,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
