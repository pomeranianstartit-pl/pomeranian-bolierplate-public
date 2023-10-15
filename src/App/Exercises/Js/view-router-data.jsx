import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { emptyValuesAndStringsMetaData } from './EmptyValuesAndStrings/router-data';
import { stringMethodsMetaData } from './StringMethods/router-data';
import { blockRouterMetaDataJsObjectBasics } from './Exercise-js-array-objects-basics/router-data';
import { ArrayBasicMetaData } from './ArrayBasics/router-data';
import { objectsAndDateMetaData} from './ObjectsBasics/router-data';
import { dateTimeMetaData} from './JsDateTime/ruter-data';



export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesAndStringsMetaData,
  stringMethodsMetaData,
  blockRouterMetaDataJsObjectBasics,
  ArrayBasicMetaData,
  objectsAndDateMetaData,
  dateTimeMetaData,

];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
