import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataifSwitch } from './ifSwitch/router-data';
import { blockRouterMetaData as blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaData as blockRouterMetaJsNumbersTraining } from './JsNumberTraining/router-data';
import { blockRouterMetaData as blockRouterMetaJsComplexTypes } from './Exercise-js-complex-types/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBoolean,
  blockRouterMetaDataifSwitch,
  blockRouterMetaDataNumbers,
  blockRouterMetaJsNumbersTraining,
  blockRouterMetaJsComplexTypes,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
