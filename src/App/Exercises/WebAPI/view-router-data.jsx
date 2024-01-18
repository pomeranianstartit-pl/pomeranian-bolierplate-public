import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { AsyncAwaitMetaData } from './AsyncAwait/router-data';
import { useEffectAndPromiseExerciseMetaData } from './useEffectAndPromiseExercise/router-data';
import { PromiseandMeMetaData } from './PromiseAndMe/router-data';
import { PromisesMethodsMetaData } from './PromisesMethods/router-data';
import { PromisesMethodsTrainingMetaData } from './PromisesMethodsTraining/router-data';
import { TryCatchFinallyMetaData } from './TryCatchFinally/router-data';

export const blockRouterMetaData = [
  AsyncAwaitMetaData,
  PromiseandMeMetaData,
  useEffectAndPromiseExerciseMetaData,
  PromisesMethodsMetaData,
  PromisesMethodsTrainingMetaData,
  TryCatchFinallyMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
