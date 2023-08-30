import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { blockRouterMetaData as moleRoute } from './Mole/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, moleRoute];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
