import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBooleanExc1 } from './Boolean-Js-Exc/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValues } from './Empty-Value-and-Comments/router-data';
import { blockRouterMetaData as blockRouterMetaDataDateTime } from './Date-time/router-data';
import { blockRouterMetaData as blockRouterMetaDataArray } from './Array/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctions } from './js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataWarmup } from './Blok22Warmup/router-data';
import { blockRouterMetaData as blockRouterMetaDataTimeout } from './Blok22/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooleanExc1,
  blockRouterMetaDataEmptyValues,
  blockRouterMetaDataDateTime,
  blockRouterMetaDataArray,
  blockRouterMetaDataJsFunctions,
  blockRouterMetaDataWarmup,
  blockRouterMetaDataTimeout,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
