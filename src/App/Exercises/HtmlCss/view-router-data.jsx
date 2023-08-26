import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaTextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as Selectors } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as GoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as FloatsAndPositioning } from './FloatsAndPositioning/router-data';
import { blockRouterMetaData as FloatsAndPositioningExercise } from './FloatsAndPositioningExercise/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  Selectors,
  GoogleFonts,
  CssAnimations,
  FloatsAndPositioning,
  FloatsAndPositioningExercise,
  blockRouterMetaTextFundaments,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
