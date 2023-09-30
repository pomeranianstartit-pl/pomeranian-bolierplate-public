import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { CssAnimationsMetaData } from './CssAnimations/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';

import { TextFundamentsMetaData } from './TextFundaments/router-data';
// import { SelectorAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  // SelectorAndCascadeRouterMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  CssAnimationsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
