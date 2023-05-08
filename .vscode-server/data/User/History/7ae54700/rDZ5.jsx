import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExercise1Data } from './SubRouteExercise1/router-data';

export const blockRouterMetaData = [SubRouteExercise1Data];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
