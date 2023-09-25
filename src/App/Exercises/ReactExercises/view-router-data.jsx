import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Event/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, EventsMetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
