import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Blok8MetaData } from './Blok 8/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, Blok8MetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
