import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as Boolean } from './Boolean/router-data';
import { blockRouterMetaData as IfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as Numbers } from './Numbers/router-data';
import { blockRouterMetaData as JsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as EmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JsArraysBasics } from './JsArraysBasics/router-data';
import { blockRouterMetaData as JsArrayMethodsExercise } from './JsArrayMethodsExercise/router-data';
import { blockRouterMetaData as JsStringsAsArrays } from './JsStringsAsArrays/router-data';
import { blockRouterMetaData as JsObjectsBasics } from './JsObjectsBasics/router-data';
import { blockRouterMetaData as JsDateTime } from './JsDateTime/router-data';
import { blockRouterMetaData as JsFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as Hoisting } from './Hoisting/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  Boolean,
  IfSwitch,
  Numbers,
  JsNumbersTraining,
  EmptyValuesAndComments,
  JsArraysBasics,
  JsArrayMethodsExercise,
  JsStringsAsArrays,
  JsObjectsBasics,
  JsDateTime,
  JsFunctionBasics,
  Hoisting,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
