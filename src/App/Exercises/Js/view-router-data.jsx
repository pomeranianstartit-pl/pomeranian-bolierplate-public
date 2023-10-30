import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndStringsMetaData } from './EmptyVaulesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { objectsBasicsMetaData } from './ObjectsBasics/router-data';
import { jsDateTimeMetaData } from './JsDateTime/router-data';
import { jsExtensionMetaData } from './JsExtension/router-data';
import { jsSetTimeoutMetaData } from './JsSetTimeout/router-data';
import { jsSetIntervalMetaData } from './JsSetInterval/router-data';
import { vanishStringMetaData } from './VanishString/router-data';
import { timerMetaData } from './Timer/router-data';
import { oopMetaData } from './OOP/router-data';
import { jsonMetaData } from './JSON/router-data';
import { storageMetaData } from './Storage/router-data';
import { savedInputMetaData } from './SavedInput/router-data';
import { savedInput2MetaData } from './SavedInput2/router-data';
import { promisessMetaData } from './Promise/router-data';
import { promiseapiMetaData } from './PromiseSimulateApi/router-data';

import { exerciseJsArrayBasicsMetaData } from './Exercise-js-arrays-basics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  exerciseJsArrayBasicsMetaData,
  objectsBasicsMetaData,
  jsDateTimeMetaData,
  jsExtensionMetaData,
  jsSetTimeoutMetaData,
  jsSetIntervalMetaData,
  vanishStringMetaData,
  timerMetaData,
  oopMetaData,
  jsonMetaData,
  storageMetaData,
  savedInputMetaData,
  savedInput2MetaData,
  promisessMetaData,
  promiseapiMetaData,

];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
