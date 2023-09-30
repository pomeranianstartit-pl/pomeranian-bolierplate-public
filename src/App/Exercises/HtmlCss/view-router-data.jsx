import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';

import { blockRouterMetaData as blockRouterMetaDataEx2 } from './ExampleTest/router-data';
import { TextFundamentsRouterMetaData } from './TextFundaments/router-data';
import { GoogleFontsRouterMetaData } from './GoogleFonts/router-data';
import { CssAnimationsRouterMetaData } from './CssAnimations/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';

// import { SelectorsAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataEx2,
  // SelectorsAndCascadeRouterMetaData,
  TextFundamentsRouterMetaData,
  GoogleFontsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
