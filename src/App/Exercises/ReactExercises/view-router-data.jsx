import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  hitTheMoleMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
