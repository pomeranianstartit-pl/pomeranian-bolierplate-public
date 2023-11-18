import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { blockRouterMetaDataJsObjectBasics } from './Exercise-js-array-objects-basics/router-data';
import { ArrayBasicMetaData } from './ArrayBasics/router-data';
import { objectsAndDateMetaData} from './ObjectsBasics/router-data';
import { dateTimeMetaData} from './JsDateTime/ruter-data';
import { jsExtensionMetaData} from './JsExtension/ruter-data';
import { jsSetTimeoutMetaData } from './JsSetTimeout/router-data'; 
import { jsSetIntervalMetaData } from './JsSetInterval/router-data';
import { vanishStringMetaData } from './VanishString/router-data';
import { timerMetaData } from './Timer/router-data';
import { oop1MetaData } from './OOP/router-data';
import { oopExerciseMetaData } from './OOPExercise/router-data.jsx';
import { tryCatchMetaData } from './TryCatch/router-data';
import { jsonMetaData } from './JSON/router-data';
import { storageMetaData } from './Storage/router-data';
import { savedInputMetaData } from './SavedInput/router-data';
import { promiseMetaData } from './Promise/router-data';
import { promiseSimulateApiMetaData } from './PromiseSimulateApi/router-data';


export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  blockRouterMetaDataJsObjectBasics,
  ArrayBasicMetaData,
  objectsAndDateMetaData,
  dateTimeMetaData,
  jsExtensionMetaData,
  jsSetTimeoutMetaData,
  jsSetIntervalMetaData,
  vanishStringMetaData,
  timerMetaData, 
  oop1MetaData,
  oopExerciseMetaData,
  tryCatchMetaData,
  jsonMetaData,
  storageMetaData,
  savedInputMetaData,
  promiseMetaData,
  promiseSimulateApiMetaData, 


];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
