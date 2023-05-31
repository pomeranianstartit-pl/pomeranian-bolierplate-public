import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { MemoRoute } from './Memo/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, MemoRoute];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
