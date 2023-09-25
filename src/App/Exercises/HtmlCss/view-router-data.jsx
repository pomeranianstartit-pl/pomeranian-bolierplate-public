import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataText } from './Text/router-data';
import { blockRouterMetaData as blockRouterMetaDataAnimations } from './Animations/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataText,
  blockRouterMetaDataAnimations,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
