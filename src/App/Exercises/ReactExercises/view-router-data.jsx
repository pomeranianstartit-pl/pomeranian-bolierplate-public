import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { blockRouterMetaData as ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { blockRouterMetaData as Block09MetaData } from './Block09/router-data';
import { blockRouterMetaData as MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { blockRouterMetaData as LocalDevAndFetch} from './LocalDev/router-data';
import { blockRouterMetaData as ToDoList} from './ToDoWithServer/router-data';


export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  MaterialUIBasicElementsMetaData,
  LocalDevAndFetch,
  ToDoList,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
