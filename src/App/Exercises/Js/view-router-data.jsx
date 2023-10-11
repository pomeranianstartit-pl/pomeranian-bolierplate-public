import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndStringsMetaData } from './EmptyVaulesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { objectsBasicsMetaData } from './ObjectsBasics/router-data';
import { jsDateTimeMetaData } from './JsDateTime/router-data';
import { jsExtensionMetaData } from './JsExtension/router-data';
import { exerciseJsArrayBasicsMetaData } from './Exercise-js-arrays-basics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  exerciseJsArrayBasicsMetaData,
  objectsBasicsMetaData,
  jsDateTimeMetaData,
  jsExtensionMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
