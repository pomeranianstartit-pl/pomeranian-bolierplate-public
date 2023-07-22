import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as FloatsAndPositioning } from './FloatsAndPositions/router-data';
import { blockRouterMetaData as FloatsAndPositioningExercises } from './FloatsAndPositioningExercises/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  FloatsAndPositioning,
  FloatsAndPositioningExercises,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
