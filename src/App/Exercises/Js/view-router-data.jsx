import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaExercisesIf } from './Exercise-numbers-if/router-data';
import { blockRouterMetaData as EmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JsArrayBasics } from './JsArrayBasics/router-data';
import { blockRouterMetaData as JsExerciseFunctions } from './JsExerciseFunctions/router-data';
import { blockRouterMetaData as Czas } from './JSTimeFunctions/router-data';
import { blockRouterMetaData as HitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as MemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as TryCatchAndFinally } from './TryCatchAndFinally/router-data';
import { blockRouterMetaData as JSPrototypesExercise } from './Exercise-js-prototypes/router-data';
import { blockRouterMetaData as JSThisKeyword } from './Js-this-keyword/router-data';
import { blockRouterMetaData as PromisesExercise } from './Promises and API/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaExercisesIf,
  EmptyValuesAndComments,
  JsArrayBasics,
  JsExerciseFunctions,
  Czas,
  HitTheMoleGame,
  MemoGame,
  TryCatchAndFinally,
  JSPrototypesExercise,
  JSThisKeyword,
  PromisesExercise,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
