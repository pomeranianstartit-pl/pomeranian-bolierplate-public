import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterDataIfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as blockRouterDataNumbers } from './Numbers/router-data';
import { blockRouterMetaData as blockrouterDataJsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as blockrouterDataJsArrayMethodsExercise } from './JsArrayMethodsExercise/router-data';
import {blockRouterMetaData as blockRouterMetaDataJsFunctionBasics} from './JsFunctionBasics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBoolean,
  blockRouterDataIfSwitch,
  blockRouterDataNumbers,
  blockrouterDataJsNumbersTraining,
  blockrouterDataJsArrayMethodsExercise,
  blockRouterMetaDataJsFunctionBasics,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
