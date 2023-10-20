import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { BooleanMetaData } from './Boolean/router-data';
import { blockRouterMetaDataNumbers } from './Numbers/router-data';
import { JsArraysBasicsMetaData } from './JsArraysBasics/router-data';
import { JsFunctionBasicsMetaData } from './JsFunctionBasics/router-data';
import { HoistingMetaData } from './Hoisting/router-data';
import { ExerciseJsFunctionsMetaData } from './ExerciseJsFunctions/router-data';
import { JsObjectBasicsMetaData } from './JsObjectBasics/router-data';
import { DateTimeMetaData } from './DateTime/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanMetaData,
  blockRouterMetaDataNumbers,
  JsArraysBasicsMetaData,
  JsFunctionBasicsMetaData,
  HoistingMetaData,
  ExerciseJsFunctionsMetaData,
  JsObjectBasicsMetaData,
  DateTimeMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
