import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBooleans } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaDataObjectsArrays } from './Exercise-js-arrays-objects/router-data';
import { blockRouterMetaData as blockRouterMetaDataObjects } from './JsObjectBasic/router-data';
import { blockRouterMetaData as blockRouterMetaDataDataTime } from './DateTime/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooleans,
  blockRouterMetaDataNumbers,
  blockRouterMetaDataObjectsArrays,
  blockRouterMetaDataObjects,
  blockRouterMetaDataDataTime,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
