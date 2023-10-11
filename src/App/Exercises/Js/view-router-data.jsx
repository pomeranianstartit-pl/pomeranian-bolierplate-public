import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { EmptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { ExerciseJsArrayBasicsMetaData } from './Exercise-js-arrays basics/router-data';
import { ObjectsBasicsMetaData } from './ObjectsBasics/router-data';
import { dateTimeMetaData } from './JsDateTime/router-data';
import { jsExtensionMetaData } from './JsExtension/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  EmptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  ExerciseJsArrayBasicsMetaData,
  ObjectsBasicsMetaData,
  dateTimeMetaData,
  jsExtensionMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
