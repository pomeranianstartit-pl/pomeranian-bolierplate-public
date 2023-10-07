import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactEventsUseStateMetaData } from './ReactEventsExample/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactIfStatementsMoreOrLessMetaData } from './ReactIfStatementsMoreOrLess/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { ToDoExerciseMetaData } from './ToDoExercise/router-data';
import { FormsMetaData } from './Forms/router-data';
import { AuthFirebaseMetaData } from './AuthFirebase/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
  ReactIfStatementsMetaData,
  ReactIfStatementsMoreOrLessMetaData,
  ToDoWithServerMetaData,
  ToDoExerciseMetaData,
  FormsMetaData,
  AuthFirebaseMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
