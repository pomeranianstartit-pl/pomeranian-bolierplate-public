import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBooleansNumbers } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysBasics } from './Exercise-js-arrays-basics/router-data';
import { blockRouterMetaData as blockRouterMetaDataMethodsOnArraysJavaScript } from './Exercise-js-arrays-methods/router-data';
import { blockRouterMetaData as JsFunctionsBasics } from './Exercise-js-function-basics/router-data';
import { blockRouterMetaData as JsFunctionsCwiczeniaZFigmy } from './Exercise-js-functions-cwiczenia-figma/router-data';
import { blockRouterMetaData as HitTheMoleGameData } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as MemoGameData } from './Memo/router-data';
import { blockRouterMetaData as OopData } from './exercise-oop/router-data';
import { blockRouterMetaData as SavedInputData } from './SavedInput/router-data';
import { blockRouterMetaData as TryCatchData } from './Try-catch/router-data';
import { blockRouterMetaData as PromisesData } from './Exercise-js-promises/router-data';
import { blockRouterMetaData as PromisesWithUseEffectData } from './Exercise-js-promise-use-effect/router-data';
import { blockRouterMetaData as UseRefData } from './UseRef/router-data';
import { blockRouterMetaData as ToDoListVer2 } from './ToDoWithServerVer2/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBooleansNumbers,
  blockRouterMetaDataJsArraysBasics,
  blockRouterMetaDataMethodsOnArraysJavaScript,
  JsFunctionsBasics,
  JsFunctionsCwiczeniaZFigmy,
  HitTheMoleGameData,
  MemoGameData,
  OopData,
  SavedInputData,
  TryCatchData,
  PromisesData,
  PromisesWithUseEffectData,
  UseRefData,
  ToDoListVer2,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
