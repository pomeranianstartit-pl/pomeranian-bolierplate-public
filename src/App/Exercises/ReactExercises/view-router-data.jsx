import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactOnClickRouterData } from './ReactOnClick/router-data';
import { ReactOnChangeMetaData } from './ReactOnChange/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactIfAisBiggerthanBMetaData } from './ReactIfAisBiggerthanB/router-data';
import { ReactGuestNumberMetaData } from './ReactGuestNumber/router-data';
import { ReactIfAisBiggerThan10MetaData } from './ReactIfAisBiggerThan10/router-data';
import { HitTheMoleMetaData } from './HitTheMole/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { BasicFormsRouterData } from './BasicForms/router-data';
import { ReactHookBasicFormsRouterData } from './ReactBasicForms/router-data';
import { FormOrderingRouterData } from './FormOrdering/router-data';
import { FirebaseRouterData } from './Firebase/router-data';
import { CounterReduxRouterData } from './CounterRedux/router-data';
import { PokemonRtkRouterData } from './PokemonRTK/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterData,
  ReactOnChangeMetaData,
  ReactIfStatementsMetaData,
  ReactGuestNumberMetaData,
  ReactIfAisBiggerthanBMetaData,
  ReactIfAisBiggerThan10MetaData,
  HitTheMoleMetaData,
  ToDoWithServerMetaData,
  BasicFormsRouterData,
  ReactHookBasicFormsRouterData,
  FormOrderingRouterData,
  FirebaseRouterData,
  CounterReduxRouterData,
  PokemonRtkRouterData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
