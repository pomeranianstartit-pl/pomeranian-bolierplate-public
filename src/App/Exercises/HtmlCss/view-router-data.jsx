import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataSelectors } from './Selectors/router-data';
import { blockRouterMetaData as blockRouterMetaDataAnimations } from './Colors/router-data';
import { blockRouterMetaData as blockRouterMetaDataOpacity } from './Opacity/router-data';
import { blockRouterMetaData as blockRouterMetaDataBackground } from './Background/router-data';
import { blockRouterMetaData as blockRouterDataVideoAudioIframe } from './VideoAudioIframe/router-data';
export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataSelectors,
  blockRouterMetaDataAnimations,
  blockRouterMetaDataOpacity,
  blockRouterMetaDataBackground,
  blockRouterDataVideoAudioIframe,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
