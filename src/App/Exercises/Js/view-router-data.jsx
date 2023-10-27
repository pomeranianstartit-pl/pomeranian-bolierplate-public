import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as EmptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { blockRouterMetaData as StringMethodsMetaData } from './StringMethods/router-data';
import { blockRouterMetaData as JsArraysObjectsBasics } from './Exercise-js-arrays-objects-basics/router-data';
import { blockRouterMetaData as JsObjectsBasics } from './ObjectsBasics/router-data';
import { blockRouterMetaData as JsDateTimeMetaData } from './JsDateTime/router-data';
import { jsExtensionMetaData } from './JsExtension/router-data';
import { jsSetTimeoutMetaData } from './JsSetTimeout/router-data';
import { jsSetIntervalMetaData } from './JsSetInterval/router-data';
import { VanishingStringMetaData } from './VanishingString/router-data';
import { TimerExerciseMetaData } from './Timer/router-data';
import { oopMetaData } from './OOP/router-data';
import { blockRouterMetaData as TryCatchMetaData } from './TryCatch/router-data';
import { blockRouterMetaData as JsonExercise } from './JSON/router-data';
import { StorageMetaData } from './Storage/router-data';
import { savedInputMetaData } from './SavedInput/router-data';
import { PromiseMetaData } from './Promise/router-data';
import { PromiseSimulateApiMetaData } from './PromiseSimulateApi/router-data';
export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  EmptyValuesAndStringsMetaData,
  StringMethodsMetaData,
  JsArraysObjectsBasics,
  JsObjectsBasics,
  JsDateTimeMetaData,
  jsExtensionMetaData,
  jsSetTimeoutMetaData,
  jsSetIntervalMetaData,
  VanishingStringMetaData,
  TimerExerciseMetaData,
  oopMetaData,
  TryCatchMetaData,
  JsonExercise,
  StorageMetaData,
  savedInputMetaData,
  PromiseMetaData,
  PromiseSimulateApiMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
