import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExercise1 } from './SubRouteExercise1/router-data';

export const blockRouterMetaData = [SubRouteExercise1];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
