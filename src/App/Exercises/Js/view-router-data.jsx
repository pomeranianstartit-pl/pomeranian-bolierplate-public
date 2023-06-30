import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { IFMetaData } from './IF/router-data';
import { EmptyValuesAndCommentsMetaData } from './EmptyValuesAndComments/router-data'
import { JsArraysBasicsMetaData } from './JsArraysBasics/router-data'
import { SortFunctionsMetaData } from './SortFunctions/router-data';
import { ArgsMetaData } from './Args/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  IFMetaData,
  EmptyValuesAndCommentsMetaData,
  JsArraysBasicsMetaData,
  SortFunctionsMetaData,
  ArgsMetaData
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
