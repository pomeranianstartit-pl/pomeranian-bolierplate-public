import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataText } from './Text/router-data';
import { blockRouterMetaData as blockRouterMetaDataAnimations } from './Animations/router-data';
import { blockRouterMetaData as blockRouterMetaDataColors } from './Colors/router-data';
import { blockRouterMetaData as blockRouterMetaDataOpacity } from './Opacity/router-data';
import { blockRouterMetaData as blockRouterMetaDataBackground } from './Background/router-data';
import { blockRouterMetaData as blockRouterMetaDataAudioVideoIfrem } from './AudioVideoIframe/router-data';
import { blockRouterMetaData as blockRouterMetaDataTables } from './Tables/router-data';
import { blockRouterMetaData as blockRouterMetaDataTablesTennis } from './TablesTennis/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoxModel } from './BoxModel/router-data';
import { blockRouterMetaData as blockRouterMetaDataPositioningExercise } from './PositioningExercise/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataText,
  blockRouterMetaDataAnimations,
  blockRouterMetaDataColors,
  blockRouterMetaDataOpacity,
  blockRouterMetaDataBackground,
  blockRouterMetaDataAudioVideoIfrem,
  blockRouterMetaDataTables,
  blockRouterMetaDataTablesTennis,
  blockRouterMetaDataBoxModel,
  blockRouterMetaDataPositioningExercise,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
