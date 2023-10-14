import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleansNumbersIfSwitchMetaData } from './Booleans-numbers-if-switch/router-data';
import { NumbersMetaData } from './Numbers/router-data';
import { ExerciseObjectsArraysMetaData } from './Js-Arrays-Basic/router-data';
import { JsObjectBasicsMetaData } from './JsObjectsBasics/router-data';
import { DateTimeMetaData } from './DateTime/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleansNumbersIfSwitchMetaData,
  NumbersMetaData,
  ExerciseObjectsArraysMetaData,
  JsObjectBasicsMetaData,
  DateTimeMetaData,
  
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
