import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { BooleanMetaData } from './Boolean/router-data';
import { blockRouterMetaDataNumbers } from './Numbers/router-data';
import { JsArraysBasicsMetaData } from './JsArraysBasics/router-data';
import { JsFunctionBasicsMetaData } from './JsFunctionBasics/router-data';
import { HoistingMetaData } from './Hoisting/router-data';
import { ExerciseJsFunctionsMetaData } from './ExerciseJsFunctions/router-data';
import { JsObjectBasicsMetaData } from './JsObjectBasics/router-data';
import { DateTimeMetaData } from './DateTime/router-data';
import { JsSetTimeoutMetaData } from './JsSetTimeout/router-data';
import { JsIntevalMetaData } from './JsSetInterval/router-data';
import { UseEffectMetaData } from './UseEffect/router-data';
import { VanishStringMetaData } from './VanishString/router-data';
import { TimerMetaData } from './Timer/router-data';
import { SliderBannerMetaData } from './SliderBanner/router-data';
import { MemoGameMetaData } from './MemoGames/router-data';
import { OOPMetaData } from './OOP/router-data';
import { JsStorageMetaData } from './JsStorage/router-data';
import { SavedInputMetaData } from './SavedInput/router-data';
import { PromisesAndMeMetaData } from './PromisesAndMe/router-data';
import { useEffectAndPromiseExerciseMetaData } from './useEffectAndPromiseExercise/router-data';
import { PromisesMethodsMetaData } from './PromisesMethods/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanMetaData,
  blockRouterMetaDataNumbers,
  JsArraysBasicsMetaData,
  JsFunctionBasicsMetaData,
  HoistingMetaData,
  ExerciseJsFunctionsMetaData,
  JsObjectBasicsMetaData,
  DateTimeMetaData,
  JsSetTimeoutMetaData,
  JsIntevalMetaData,
  UseEffectMetaData,
  VanishStringMetaData,
  TimerMetaData,
  SliderBannerMetaData,
  MemoGameMetaData,
  OOPMetaData,
  JsStorageMetaData,
  SavedInputMetaData,
  PromisesAndMeMetaData,
  useEffectAndPromiseExerciseMetaData,
  PromisesMethodsMetaData,
  PromisesMethodsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
