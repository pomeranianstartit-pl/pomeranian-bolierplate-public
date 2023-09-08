import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as booleansBlocksRouterMetaData } from './Boolean/router-data';
import { blockRouterMetaData as ifSwitchBlocksRouterMetaData } from './IfSwitch/router-data';
import { blockRouterMetaData as numbersBlocksRouterMetaData } from './Numbers/router-data';
import { blockRouterMetaData as excersNumbersBooleanRouterMetaData } from './JsExercises/router-data';
import { blockRouterMetaData as JsCompleexTypes } from './Exercise-js-complex-types-in-js/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleansBlocksRouterMetaData,
  ifSwitchBlocksRouterMetaData,
  numbersBlocksRouterMetaData,
  excersNumbersBooleanRouterMetaData,
  JsCompleexTypes,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
