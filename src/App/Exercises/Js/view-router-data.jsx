import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaDataBooolean as blockRouterMetaDataBooolean } from './Boolean/router-data';
import { blockRouterMetaDataIfSwitch as blockRouterMetaDataIfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaDataNumbers as blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaDataNumbersTraining as blockRouterMetaDataNumbersTraining } from './NumbersTraining/router-data';
import { blockRouterMetaDataEmptyValuesAndComments as blockRouterMetaDataEmptyValuesAndComments } from './EmptyValuesAndComments/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooolean,
  blockRouterMetaDataIfSwitch,
  blockRouterMetaDataNumbers,
  blockRouterMetaDataNumbersTraining,
  blockRouterMetaDataEmptyValuesAndComments,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
