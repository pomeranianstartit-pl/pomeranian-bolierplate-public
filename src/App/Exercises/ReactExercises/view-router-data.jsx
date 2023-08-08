import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { MaterialUIBasicElementMetaData } from './MaterialUIBasicElement/router-data';
import { SwagerMetaData } from './Swager/router-data';
import { TodoWithServerMetaData } from './TodoWithServer/router-data';
import { ReactUseRef } from './ReactUseRef/ReactUseRef';
import { ReactUseRefMetaData } from './ReactUseRef/router-data';

export const blockRouterMetaData = [
  ReactRouterEventsMetaData,
  Block09MetaData,
  MaterialUIBasicElementMetaData,
  SwagerMetaData,
  TodoWithServerMetaData,
  ReactUseRefMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
