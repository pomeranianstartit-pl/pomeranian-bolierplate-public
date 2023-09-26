import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataColors } from './Colors/router-data';
import { blockRouterMetaData as blockRouterMetaDataOpacity } from './Opacity/router-data';
import { blockRouterMetaData as blockRouterMetaDataBackground } from './Background/router-data';
import { blockRouterMetaData as blockRouterMetaDataVideoAudioIframe } from './VideoAudioIframe/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataColors,
  blockRouterMetaDataOpacity,
  blockRouterMetaDataBackground,
  blockRouterMetaDataVideoAudioIframe,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
