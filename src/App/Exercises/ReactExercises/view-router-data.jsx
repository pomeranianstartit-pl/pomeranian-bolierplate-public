import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { MaterialUIBasicElementMetaData } from './MaterialUIBasicElement/router-data';
import { SwagerMetaData } from './Swager/router-data';
import { TodoWitchServerMetaData } from './TodoWitchServer/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  MaterialUIBasicElementMetaData,
  SwagerMetaData,
  TodoWitchServerMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
