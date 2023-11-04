import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { BooleanRouterMetaData } from './Boolean/router-data';
import { NumbersrMetaData } from './Numbers/router-data';
import { JsArraysObjectsMetaData } from './JsArraysObjects/router-data';
import { StringMethodsMetaData } from './String Methods/router-data';
import { JsObjectBasicsMetaData } from './JsObjectBasics/router-data';
import { DateTimeMetaData } from './DataTime/router-data';
import { JsFunctionBasicsMetaData } from './JsFunctionBasics/router-data';
import { HoistingMetaData } from './Hoisting/router-data';
import { ExerciseJsFunctionsMetaData } from './ExerciseJsFunctions/router-data';
import { JsSetTimeOutMetaData } from './JsSetTimeOut/Numbers/router-data';
import { JsSetTimeIntervalMetaData } from './JsSetTimeInterval/Numbers/router-data';
import { UseEffectsMetaData } from './UseEffect/router-data';
import { VanishStringMetaData } from './VanishString/router-data';
import { TimerMetaData } from './Timer/router-data';
import { MovingTextMetaData } from './MovingText/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';
import { JsOOPMetaData } from './OOP/router-data';
import { JsStorageMetaData } from './JsStorage/router-data';
import { JsSavedInputMetaData } from './SavedInput/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanRouterMetaData,
  NumbersrMetaData,
  JsArraysObjectsMetaData,
  StringMethodsMetaData,
  JsObjectBasicsMetaData,
  DateTimeMetaData,
  JsFunctionBasicsMetaData,
  HoistingMetaData,
  ExerciseJsFunctionsMetaData,
  JsSetTimeOutMetaData,
  JsSetTimeIntervalMetaData,
  UseEffectsMetaData,
  VanishStringMetaData,
  TimerMetaData,
  MovingTextMetaData,
  MemoGameMetaData,
  JsOOPMetaData,
  JsStorageMetaData,
  JsSavedInputMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
