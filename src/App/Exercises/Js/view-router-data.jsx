import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbers } from './Numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsIfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsTrainingNumbersAndBooleans } from './TrainingNumbersAndBooleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArrays } from './Arrays/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsStringsTraining } from './StringsTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsIntervalsDFata } from './IntervalsData/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsDateAndTime } from './DateAndTime/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBoolean,
  blockRouterMetaDataJsIfSwitch,
  blockRouterMetaDataJsNumbers,
  blockRouterMetaDataJsTrainingNumbersAndBooleans,
  blockRouterMetaDataJsStringsTraining,
  blockRouterMetaDataJsArrays,
  blockRouterMetaDataJsIntervalsDFata,
  blockRouterMetaDataJsDateAndTime,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
