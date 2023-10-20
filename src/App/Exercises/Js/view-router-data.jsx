import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBooleans } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataObjectsArraysWeek4 } from './Exercise-js-arrays-objects-week4/router-data';
import { blockRouterMetaData as blockRouterMetaDataObjects } from './JsObjectsBasics/router-data';
import { blockRouterMetaData as blockRouterMetaDataDateTime } from './DateTime/router-data';
import { blockRouterMetaData as blockRouterMetaDataFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as blockRouterMetaDataHoisting } from './Hoisting/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsFunctions } from './ExerciseJsFunctions/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooleans,
  blockRouterMetaDataNumbers,
  blockRouterMetaDataObjectsArraysWeek4,
  blockRouterMetaDataObjects,
  blockRouterMetaDataDateTime,
  blockRouterMetaDataFunctionBasics,
  blockRouterMetaDataHoisting,
  blockRouterMetaDataExerciseJsFunctions,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
