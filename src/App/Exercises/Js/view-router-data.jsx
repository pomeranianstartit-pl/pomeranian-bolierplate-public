import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { ExerciseNumberIfMetaData } from './Exercise-number-if/router-data';
import { JsNumbersTrainingMetaData } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndComments } from './Exercise-js-functions/EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysBasics } from './JsArraysBasics/router-data';
export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  ExerciseNumberIfMetaData,
  JsNumbersTrainingMetaData,
  blockRouterMetaDataEmptyValuesAndComments,
  blockRouterMetaDataJsArraysBasics,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
