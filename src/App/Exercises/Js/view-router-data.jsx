import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { BooleanMetaData } from './Boolean/router-data';
import { blockRouterMetaDataNumbers } from './Numbers/router-data';
import { JsArraysBasicsMetaData } from './JsArraysBasics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanMetaData,
  blockRouterMetaDataNumbers,
  JsArraysBasicsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
