import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { SubRouteExercise2 } from './Exercise2/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, SubRouteExercise2];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
