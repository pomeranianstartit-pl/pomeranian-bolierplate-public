import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Events/router-data';
import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { MemoMetaData } from './Memo/router-data';
import { ToDoServerMetaData } from './ToDoWithServer/router-data';
import { ToDoServerOneMetaData } from './ToDoServerOne/router-data';
import { FormMetaData } from './Form/router-data';
import { FormHookMetaData } from './FormBasicHook/router-data';
import { FormNewMetaData } from './FormNew/router-data';
import { FirebaseMetaData } from './ReactFirebase/router-data';
import { RTLTestingMetaData } from './RTLTesting /router-data';
import { ReduxCounterMetaData } from './ReduxCounter/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  HitTheMoleMetaData,
  MemoMetaData,
  ToDoServerMetaData,
  ToDoServerOneMetaData,
  FormMetaData,
  FormHookMetaData,
  FormNewMetaData,
  FirebaseMetaData,
  RTLTestingMetaData,
  ReduxCounterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
