import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { BooleanRouterMetaData } from './Boolean/router-data';
import { NumbersrMetaData } from './Numbers/router-data';
import { JsArraysObjectsMetaData } from './JsArraysObjects/router-data';
import { StringMethodsMetaData } from './String Methods/router-data';
import { JsObjectBasicsMetaData } from './JsObjectBasics/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanRouterMetaData,
  NumbersrMetaData,
  JsArraysObjectsMetaData,
  StringMethodsMetaData,
  JsObjectBasicsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
