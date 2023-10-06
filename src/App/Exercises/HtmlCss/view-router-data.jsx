import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataSelectors } from './Selectors/router-data';
import { blockRouterMetaData as blockRouterMetaDataText } from './Text/router-data';
import { blockRouterMetaData as blockRouterMetaDataAnimations } from './Animations/router-data';
import { blockRouterMetaData as blockRouterMetaDataColors } from './Colors/router-data';
import { blockRouterMetaData as blockRouterMetaDataOpacity } from './Opacity/router-data';
import { blockRouterMetaData as blockRouterMetaDataBackground } from './Background/router-data';
import { blockRouterMetaData as blockRouterMetaDataVideoAudioIframe } from './VideoAudioIframe/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoxModel } from './Boxmodel/router-data';
import { blockRouterMetaData as blockRouterMetaDataTables } from './Tables/router-data';
import { blockRouterMetaData as blockRouterMetaDataTablesTennis } from './TablesTennis/router-data';
import { blockRouterMetaData as blockRouterMetaDataPositioningExercise } from './PositioningExercise/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataSelectors,
  blockRouterMetaDataText,
  blockRouterMetaDataAnimations,
  blockRouterMetaDataColors,
  blockRouterMetaDataOpacity,
  blockRouterMetaDataBackground,
  blockRouterMetaDataVideoAudioIframe,
  blockRouterMetaDataBoxModel,
  blockRouterMetaDataTables,
  blockRouterMetaDataTablesTennis,
  blockRouterMetaDataPositioningExercise,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
