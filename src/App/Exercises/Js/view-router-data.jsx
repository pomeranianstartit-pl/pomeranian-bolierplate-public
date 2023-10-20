import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBooleans } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaDataExerciseObjectsArrayWeek4 } from './Exercise-js-arrays-objects-week4/router-data';
export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooleans,
  blockRouterMetaDataNumbers,
  blockRouterMetaDataExerciseObjectsArrayWeek4,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
