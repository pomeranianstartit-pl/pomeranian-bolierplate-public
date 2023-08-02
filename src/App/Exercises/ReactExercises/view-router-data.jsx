import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { SwaggerRoute } from './Swagger/router-data';
import { todoListMetaData } from './TodoList/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  SwaggerRoute,
  todoListMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
