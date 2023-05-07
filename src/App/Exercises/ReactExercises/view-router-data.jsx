import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Blok8eMetaData } from './Blok8/router-data';
import { Blok9MetaData } from './Blok9/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, Blok8eMetaData, Blok9MetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
