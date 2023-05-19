import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBooleanExc1 } from './Boolean-Js-Exc/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValues } from './Empty-Value-and-Comments/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooleanExc1,
  blockRouterMetaDataEmptyValues,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
