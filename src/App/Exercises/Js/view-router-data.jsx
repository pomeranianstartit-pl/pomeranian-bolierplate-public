import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { blockRouterMetaDataJsObjectBasics } from './Exercise-js-arrays-basics/router-data';
import { arrayBasicsMetaData } from './ArrayBasics/router-data';
import { objectsBasicsMetaData } from './ObjectsBasics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  blockRouterMetaDataJsObjectBasics,
  arrayBasicsMetaData,
  objectsBasicsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
