import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { IFMetaData } from './IF/router-data';
import { EmptyValuesAndCommentsMetaData } from './EmptyValuesAndComments/router-data'
import { JsArraysBasicsMetaData } from './JsArraysBasics/router-data'
import { SortFunctionsMetaData } from './SortFunctions/router-data';
import { ArgsMetaData } from './Args/router-data';
import { TimeMetaData } from './Time/router-data';
import { Time2MetaData } from './Time2/router-data';
import { Banner6MetaData } from './Banner/router-data';
import { Time3MetaData } from './Time3/router-data';
import { HitTheMoleGameMetaData } from './HitTheMoleGame/router-data';
import { MemoGameMetaData } from './MemoGame/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  IFMetaData,
  EmptyValuesAndCommentsMetaData,
  JsArraysBasicsMetaData,
  SortFunctionsMetaData,
  ArgsMetaData,
  TimeMetaData,
  Time2MetaData,
  Time3MetaData,
  Banner6MetaData,
  HitTheMoleGameMetaData,
  MemoGameMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
