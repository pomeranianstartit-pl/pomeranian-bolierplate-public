import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { ExerciseMetaData } from './FloatsAndPositioning/router-data';
// import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  ExerciseMetaData,
  // SelectorsAndCascadeMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
