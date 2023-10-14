import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { BooleanRouterMetaData } from './Boolean/router-data';
import { NumbersRouterMetaData } from './Numbers/router-data';
import { blockRouterMetaDataObjectsArrays } from './Exercise-js-arrays-objects-basics/router-data';
import { JsObjectBasicsRouterMetaData } from './JsObjectBasics/router-data';
import { DateTimeRouterMetaData } from './DateTime/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanRouterMetaData,
  NumbersRouterMetaData,
  blockRouterMetaDataObjectsArrays,
  JsObjectBasicsRouterMetaData,
  DateTimeRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
