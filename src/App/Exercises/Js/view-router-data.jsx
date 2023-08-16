import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { ExerciseNumbersIfMetaData } from './Exercise-numbers-if/router-data';
import { EmptyValueAndComentsMetaData } from './EmptyValueAndComents/router-data';
import { JsArraysBasicsMetaData } from './JsArraysBasics/router-data';
import { ExerciseJsFunctionMetaData } from './ExerciseJsFunction/router-data';
import { TimeExerciseMetaData } from './TimeExercise/router-data';
import { BanerMetaData } from './Baner/router-data';
import { HitTheMoleGameMetaData } from './HitTheMoleGame/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';
import { LocalStorageMetaData } from './LocalStorage/router-data';
import { SavedInputMetaData } from './SavedInput/router-data';
import { TryCatchAndFinallyMetaData } from './TryCatchAndFinally/router-data';
import { ExercisePrototipeMetaData } from './ExercisePrototipe/router-data';
import { ThisKeywordMetaData } from './ThisKeyword/router-data';
import { PromiseMetaData } from './Promise/router-data';
import { FetchowanieDanychZApiMetaData } from './FetchowanieDanychZApi/router-data';
import { PromiseMethodsTrainingMetaData } from './PromiseMethodsTraining/router-data';
import { jsonServerMetaData } from './jsonServer/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  ExerciseNumbersIfMetaData,
  EmptyValueAndComentsMetaData,
  JsArraysBasicsMetaData,
  ExerciseJsFunctionMetaData,
  TimeExerciseMetaData,
  BanerMetaData,
  HitTheMoleGameMetaData,
  MemoGameMetaData,
  LocalStorageMetaData,
  SavedInputMetaData,
  TryCatchAndFinallyMetaData,
  ExercisePrototipeMetaData,
  ThisKeywordMetaData,
  PromiseMetaData,
  FetchowanieDanychZApiMetaData,
  PromiseMethodsTrainingMetaData,
  jsonServerMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
