import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaDataBooolean } from './Boolean/router-data';
import { blockRouterMetaDataIfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaDataArrays } from './Arrays/router-data';
import { blockRouterMetaDataJsArrayMethodsExercise } from './JsArrayMethodsExercise/router-data';
import { blockRouterMetaDataJsStringsAsArrays } from './JsStringsAsArrays/router-data';
import { blockRouterMetaDataJsObjectsBasics } from './JsObjectsBasics/router-data';
import { blockRouterMetaDataJsDateTime } from './JsDateTime/router-data';
import { blockRouterMetaDataNumbersTraining } from './NumbersTraining/router-data';
import { blockRouterMetaDataEmptyValuesAndComments } from './EmptyValuesAndComments/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooolean,
  blockRouterMetaDataIfSwitch,
  blockRouterMetaDataNumbers,
  blockRouterMetaDataNumbersTraining,
  blockRouterMetaDataEmptyValuesAndComments,
  blockRouterMetaDataArrays,
  blockRouterMetaDataJsArrayMethodsExercise,
  blockRouterMetaDataJsStringsAsArrays,
  blockRouterMetaDataJsObjectsBasics,
  blockRouterMetaDataJsDateTime,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
