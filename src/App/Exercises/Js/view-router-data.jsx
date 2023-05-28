import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJSBooleans } from './Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataJSNumbers } from './Exercise-js-numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJSNsAndBools } from './Exercise-js-numbers-and-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataArraysJavaScript } from './Exercise-js-arrays-basics/router-data';
import { blockRouterMetaData as blockRouterMetaDataMethodsOnArraysJavaScript } from './Exercise-js-arrays-methods/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctionBasics } from './Exercise-js-function-basics/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctionsTasks } from './Exercise-js-function-tasks/router-data';
export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJSBooleans,
  blockRouterMetaDataJSNumbers,
  blockRouterMetaDataJSNsAndBools,
  blockRouterMetaDataArraysJavaScript,
  blockRouterMetaDataMethodsOnArraysJavaScript,
  blockRouterMetaDataJsFunctionBasics,
  blockRouterMetaDataJsFunctionsTasks,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
