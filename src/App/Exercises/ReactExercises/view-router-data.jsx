import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { MuiMetaData } from './Mui/router-data';
import { FormsMetaData } from './Forms/router-data';
import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { TodoListMetaData } from './TodoList/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  MuiMetaData,
  FormsMetaData,
  LocalDevAndFetchMetaData,
  TodoListMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
