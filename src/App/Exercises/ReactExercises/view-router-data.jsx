import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
