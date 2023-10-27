import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { ExerciseWithPropsMetaData } from './FirstExcersise/router-data';
import { ExerciseSecondMetaData } from './SecondExercise/router-data';

// import { SelectorAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  // SelectorAndCascadeRouterMetaData,

  ExerciseWithPropsMetaData,
  ExerciseSecondMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
