import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsArrayObjectBasics } from './Exercise-js-array-object-basics/router-data';
import { objectsAndDateMetaData } from './ObjectsBasics/router-data';
import { jsSetTimeoutMetaData } from './JsSetTimeout/router-data';
import { jsSetIntervalMetaData } from './JsSetInterval/router-data';
import { vanishStringMetaData } from './VanishString/router-data';
import { timerMetaData } from './Timer/router-data';
import { jscountdownMetaData } from './Countdown/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  blockRouterMetaDataExerciseJsArrayObjectBasics,
  objectsAndDateMetaData,
  jsSetTimeoutMetaData,
  jsSetIntervalMetaData,
  vanishStringMetaData,
  timerMetaData,
  jscountdownMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
