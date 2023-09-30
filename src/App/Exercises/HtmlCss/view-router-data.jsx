import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as BlockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
// import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsRouterMetaData } from './TextFundaments/router-data';
export const blockRouterMetaData = [
  BlockRouterMetaData121220231,
  // SelectorsAndCascadeMetaData,
  TextFundamentsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
