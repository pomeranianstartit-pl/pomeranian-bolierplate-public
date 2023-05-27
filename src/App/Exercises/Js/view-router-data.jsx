import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaDataBooleans as blockRouterMetaDataBooleans } from './Exercise-js-booleans/router-data';
import { blockRouterMetaDataNumbers as blockRouterMetaDataNumbers } from './Exercise-js-numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysBasics } from '../../Exercises/Js/Exercise-js-arrays-basics/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysMethods } from '../../Exercises/Js/Exercise-js-arrays-methods/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysMethodsJSBasics } from '../Js/Exercise-js-function-basics/router-data';
export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooleans,
  blockRouterMetaDataNumbers,
  blockRouterMetaDataJsArraysBasics,
  blockRouterMetaDataJsArraysMethods,
  blockRouterMetaDataJsArraysMethodsJSBasics,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
