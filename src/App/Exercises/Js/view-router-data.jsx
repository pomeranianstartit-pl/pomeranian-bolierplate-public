import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as BooleanMetaData } from './Boolean/router-data';
import { blockRouterMetaData as IfSwitchMetaData } from './IfSwitch/router-data';
import { blockRouterMetaData as NumbersMetaData } from './Numbers/router-data';
import { blockRouterMetaData as JsNumbersTrainingMetaData } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as EmptyValuesAndCommentsMetaData } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as ArrayAndObjectsMetaData } from './ArrayAndObjects/router-data';
import { blockRouterMetaData as JsArrayMethodExerciseMetaData } from './JsArrayMethodExercise/router-data';
import { blockRouterMetaData as ObjectsMetaData } from './Objects/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  BooleanMetaData,
  IfSwitchMetaData,
  NumbersMetaData,
  JsNumbersTrainingMetaData,
  EmptyValuesAndCommentsMetaData,
  ArrayAndObjectsMetaData,
  JsArrayMethodExerciseMetaData,
  ObjectsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
