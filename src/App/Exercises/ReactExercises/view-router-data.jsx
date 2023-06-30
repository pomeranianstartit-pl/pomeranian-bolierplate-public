import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { blockRouterMetaData as blockRouterMetaDatatToDoWithServer} from './ToDoWithServer/router-data';
import { blockRouterMetaData as blockRouterMetaDatatForms} from './Forms/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, blockRouterMetaDatatToDoWithServer, blockRouterMetaDatatForms];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
