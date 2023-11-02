import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { ExerciseWithPropsMetaData } from './FirstExcersise/router-data';
import { MemoryGameMyselfMetaData } from './MemoryGame/router-data';
import { ExerciseSecondMetaData } from './SecondExercise/router-data';

// import { SelectorAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  // SelectorAndCascadeRouterMetaData,

  ExerciseWithPropsMetaData,
  ExerciseSecondMetaData,
  MemoryGameMyselfMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
