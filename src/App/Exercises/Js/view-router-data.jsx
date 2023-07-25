import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as Booleans } from './Booleans/router-data';
import { blockRouterMetaData as IfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as Numbers } from './Numbers/router-data';
import { blockRouterMetaData as JsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as EmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as jsStringTraining } from './jsStringTraining/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  Booleans,
  IfSwitch,
  Numbers,
  JsNumbersTraining,
  EmptyValuesAndComments,
  jsStringTraining,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
