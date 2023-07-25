import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { ExerciseNumberIfMetaData } from './Exercise-number-if/router-data';
import { JsNumbersTrainingMetaData } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndComments } from './Exercise-js-functions/EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysBasics } from './JsArraysBasics/router-data';
//import { blockRouterMetaData as blockRouterMetaDataExerciseJsFunctions } from './ExerciseJsFunctions/router-data'; TODO:what did I messed?
import { blockRouterMetaData as blockRouterMetaDataExerciseJsFunctions2 } from './Exercise-js-functions/ExerciseJsFunctions2/router-data';
import { blockRouterMetaData as blockRouterMetaDataTime } from './Time/router-data';
import { blockRouterMetaData as blockRouterMetaDatahitTheMoleGame } from './hitTheMoleGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './memoGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsStorage } from './Exercise-js-local-storage/router-data';
import { blockRouterMetaData as blockRouterMetaDataSavedInput } from './SavedInput/router-data';
import { blockRouterMetaData as blockRouterMetaDataTryCatchAndFinally } from './TryCatchAndFinally/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsPrototypes } from './JsPrototypes/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsThis } from './JsThis/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  ExerciseNumberIfMetaData,
  JsNumbersTrainingMetaData,
  blockRouterMetaDataEmptyValuesAndComments,
  blockRouterMetaDataJsArraysBasics,
  //blockRouterMetaDataExerciseJsFunctions,
  blockRouterMetaDataExerciseJsFunctions2,
  blockRouterMetaDataTime,
  blockRouterMetaDatahitTheMoleGame,
  blockRouterMetaDataMemoGame,
  blockRouterMetaDataJsStorage,
  blockRouterMetaDataSavedInput,
  blockRouterMetaDataTryCatchAndFinally,
  blockRouterMetaDataJsPrototypes,
  blockRouterMetaDataJsThis,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
