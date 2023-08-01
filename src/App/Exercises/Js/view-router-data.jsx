import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as Booleans } from './Booleans/router-data';
import { blockRouterMetaData as IfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as Numbers } from './Numbers/router-data';
import { blockRouterMetaData as JsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as EmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as jsStringTraining } from './jsStringTraining/router-data';
import { blockRouterMetaData as Array } from './Array/router-data';
import { blockRouterMetaData as ArrayMethods } from './ArrayMethods/router-data';
import { blockRouterMetaData as Objects } from './Objects/router-data';
import { blockRouterMetaData as JsFunctionBasics } from './JsFunctionBasics/router-data';
import { blockRouterMetaData as ExerciseJsFunctionExtented } from './ExerciseJsFunctionExtented/router-data';
import { blockRouterMetaData as IntervalsDate } from './IntervalsDate/router-data';
import { DateAndTimeMetaData } from './DateAndTime/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  Booleans,
  IfSwitch,
  Numbers,
  JsNumbersTraining,
  EmptyValuesAndComments,
  jsStringTraining,
  Array,
  ArrayMethods,
  Objects,
  JsFunctionBasics,
  ExerciseJsFunctionExtented,
  IntervalsDate,
  DateAndTimeMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
