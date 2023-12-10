import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickMetaData } from './ReactOnClick/router-data';
import { ReactOnChangeMetaData } from './ReactOnChange/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactGuessNumberMetaData } from './ReactGuessNumber/router-data';
import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { ToDoWithServer_TrenerMetaData } from './ToDoWithServer_Trener/router-data';
import { BasicFormsMetaData } from './BasicForm/router-data';
import { ReactHookBasicFromsMetaData } from './ReactHookBasicForms/router-data';
import { FormOrderMetaData } from './FormOrder/router-data';
import { FirebaseMetaData } from './Firebase/router-data';
import { CounterReducerMetaData } from './CounterRedux/router-data';
import { PokemonRTKMetaData } from './PokemonRTK/router-data';
import { MyHitTheMoleMetaData } from './myHitTheMole/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickMetaData,
  ReactOnChangeMetaData,
  ReactIfStatementsMetaData,
  ReactGuessNumberMetaData,
  HitTheMoleMetaData,
  ToDoWithServerMetaData,
  ToDoWithServer_TrenerMetaData,
  BasicFormsMetaData,
  ReactHookBasicFromsMetaData,
  FormOrderMetaData,
  FirebaseMetaData,
  CounterReducerMetaData,
  PokemonRTKMetaData,
  MyHitTheMoleMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
