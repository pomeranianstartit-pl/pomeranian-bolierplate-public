import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { blockRouterMetaData as blockRouterMetaDatatToDoWithServer} from './ToDoWithServer/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, blockRouterMetaDatatToDoWithServer];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
