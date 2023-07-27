import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as Boolean } from './Boolean/router-data';
import { blockRouterMetaData as IfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as Numbers } from './Numbers/router-data';
import { blockRouterMetaData as JsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as EmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JsStringTraining } from './JsStringTraining/router-data';
import { blockRouterMetaData as Arrays } from './Arrays/router-data';
import { blockRouterMetaData as JsArrayMethodsExercise } from './JsArrayMethodsExercise/router-data';
import { blockRouterMetaData as Objects } from './Objects/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  Boolean,
  IfSwitch,
  Numbers,
  JsNumbersTraining,
  EmptyValuesAndComments,
  JsStringTraining,
  Arrays,
  JsArrayMethodsExercise,
  Objects,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
