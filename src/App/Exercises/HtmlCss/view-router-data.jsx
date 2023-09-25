import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as BlockRouterMetaDataText } from './Text/router-data';
import { blockRouterMetaData as BlockRouterMetaDataAnimations } from './Animations/router-data';
import { blockRouterMetaData as BlockRouterMetaDataColors } from './Colors/router-data';
import { blockRouterMetaData as BlockRouterMetaDataOpacity } from './Opacity/router-data';
import { blockRouterMetaData as BlockRouterMetaDataBackgrounds } from './Backgrounds/router-data';
import { blockRouterMetaData as BlockRouterMetaDataVideoAudioiFrame } from './VideoAudioiFrame/router-data';

export const blockRouterMetaData = [
  BlockRouterMetaDataText,
  blockRouterMetaData121220231,
  BlockRouterMetaDataAnimations,
  BlockRouterMetaDataColors,
  BlockRouterMetaDataOpacity,
  BlockRouterMetaDataBackgrounds,
  BlockRouterMetaDataVideoAudioiFrame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
