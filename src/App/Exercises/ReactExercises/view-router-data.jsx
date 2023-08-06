import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
<<<<<<< HEAD
<<<<<<< HEAD
import { SwaggerRoute } from './Swagger/router-data';
import { todoListMetaData } from './TodoList/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
=======
import { MuiMetaData } from './Mui/router-data';
>>>>>>> master
=======
import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { TodoListMetaData } from './TodoList/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
>>>>>>> master

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
<<<<<<< HEAD
<<<<<<< HEAD
  SwaggerRoute,
  todoListMetaData,
  MaterialUIBasicElementsMetaData
=======
  MuiMetaData,
>>>>>>> master
=======
  LocalDevAndFetchMetaData,
  TodoListMetaData,
  MaterialUIBasicElementsMetaData,
>>>>>>> master
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
