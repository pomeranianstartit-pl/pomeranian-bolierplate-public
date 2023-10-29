import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleansNumbersIfSwitchMetaData } from './Booleans-numbers-if-switch/router-data';
import { NumbersMetaData } from './Numbers/router-data';
import { ExerciseObjectsArraysMetaData } from './Js-Arrays-Basic/router-data';
import { JsObjectBasicsMetaData } from './JsObjectsBasics/router-data';
import { DateTimeMetaData } from './DateTime/router-data';
import { JsFunctionBasicsMetaData } from './JsFunctionBasics/router-data';
import { JsHoistingsMetaData } from './Hoisting/router-data';
import { ExerciseJsFunctionMetaData } from './ExerciseJsFunction/router-data';
import { JsSetTimeoutMetaData } from './JsSetTimeOut/router-data';
import { JsSetIntervalMetaData } from './JsSetInterval/router-data';
import { UseEffectMetaData } from './UseEffect/router-data';
import { VanishStringMetaData } from './JSVanishString/router-data';
import { JsTimerMetaData } from './JsTimer/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';
import { OOPExerciseMetaData } from './OOP/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleansNumbersIfSwitchMetaData,
  NumbersMetaData,
  ExerciseObjectsArraysMetaData,
  JsObjectBasicsMetaData,
  DateTimeMetaData,
  JsFunctionBasicsMetaData,
  JsHoistingsMetaData,
  ExerciseJsFunctionMetaData,
  JsSetTimeoutMetaData,
  JsSetIntervalMetaData,
  UseEffectMetaData,
  VanishStringMetaData,
  JsTimerMetaData,
  MemoGameMetaData,
  OOPExerciseMetaData
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
