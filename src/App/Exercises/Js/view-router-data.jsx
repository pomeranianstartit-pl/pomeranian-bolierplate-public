import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { variables1MetaData } from './Exercise-js-variables-1/router-data'; // 2 sposoby importowania ten i nizej
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { jsArraysBasicMetaData } from './Exercise-ja-arrays-basics/router-data';
import { blockRouterMetaDataJsObjectBasics } from './Exercise-ja-arrays-objects-basics/router-data';
import { dateTimeMetaData } from './JsDateTime/router-data';
import { jsExtensionMetaData } from './JsExtension/router-data';
import { jsSetTimeoutMetaData } from './JsSetTimeOut/router-data';
import { jsSetIntervalMetaData } from './JsSetInterval/router-data';
import { vanishStringMetaData } from './VanishString/router-data';
import { TimerIntervalMetaData } from './Timer/router-data';
import { oopMetaData } from './OOP/router-data';
import { TryCatchMetaData } from './TryCatch/router-data';
import { JsonMetaData } from './JSON/router-data';
import { StorageMetaData } from './Storage/router-data';
import { SavedInputMetaData } from './SavedInputM/router-data';

export const blockRouterMetaData = [
  variables1MetaData,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  jsArraysBasicMetaData,
  blockRouterMetaDataJsObjectBasics,
  dateTimeMetaData,
  jsExtensionMetaData,
  jsSetTimeoutMetaData,
  jsSetIntervalMetaData,
  vanishStringMetaData,
  TimerIntervalMetaData,
  oopMetaData,
  TryCatchMetaData,
  JsonMetaData,
  StorageMetaData,
  SavedInputMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
