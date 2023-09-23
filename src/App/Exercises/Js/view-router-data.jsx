import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as booleansBlocksRouterMetaData } from './Boolean/router-data';
import { blockRouterMetaData as ifSwitchBlocksRouterMetaData } from './IfSwitch/router-data';
import { blockRouterMetaData as numbersBlocksRouterMetaData } from './Numbers/router-data';
import { blockRouterMetaData as excersNumbersBooleanRouterMetaData } from './JsExercises/router-data';
import { blockRouterMetaData as JsCompleexTypes } from './Exercise-js-complex-types-in-js/router-data';
import { blockRouterMetaData as JsFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as Blok22Warmup } from './Blok22Warmup/router-data';
import { blockRouterMetaData as SetTimeout } from './SetTimeout/router-data';
import { blockRouterMetaData as VanishString } from './VanishString/router-data';
import { blockRouterMetaData as ExerciseTimerCounting } from './ExerciseTimerCounting/router-data';
import { blockRouterMetaData as HitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as MemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as JsonXMLStorage } from './JsonXMLStorage/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleansBlocksRouterMetaData,
  ifSwitchBlocksRouterMetaData,
  numbersBlocksRouterMetaData,
  excersNumbersBooleanRouterMetaData,
  JsCompleexTypes,
  JsFunctionBasics,
  Blok22Warmup,
  SetTimeout,
  VanishString,
  ExerciseTimerCounting,
  HitTheMoleGame,
  MemoGame,
  JsonXMLStorage,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
