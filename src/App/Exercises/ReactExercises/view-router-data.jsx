import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { MuiMetaData } from './Mui/router-data';
import { FormsMetaData } from './Forms/router-data';
import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { TodoListMetaData } from './TodoList/router-data';
import { ReactUseRefMetaData } from './ReactUseRef/router-data';
import { ReduxTestMetaData } from './ReduxTest/router-data';
import { ReduxCounterMetaData } from './ReduxCounter/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  MuiMetaData,
  FormsMetaData,
  LocalDevAndFetchMetaData,
  TodoListMetaData,
  ReactUseRefMetaData,
  ReduxTestMetaData,
  ReduxCounterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
