import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as booleanMetaDataJsFunction1 } from './Boolean/router-data';
import { blockRouterMetaData as ifSwitchMetaDataJsFunction1 } from './If-switch/router-data';
import { blockRouterMetaData as numbersMetaDataJsFunction1 } from './Numbers/router-data';
import { blockRouterMetaData as jsNumbersTrainingMetaDataJsFunction1 } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as emptyValuesAndCommentsMetaDataJsFunction1 } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as jsStringTrainingMetaDataJsFunction1 } from './JsStringTraining/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanMetaDataJsFunction1,
  ifSwitchMetaDataJsFunction1,
  numbersMetaDataJsFunction1,
  jsNumbersTrainingMetaDataJsFunction1,
  emptyValuesAndCommentsMetaDataJsFunction1,
  jsStringTrainingMetaDataJsFunction1,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
