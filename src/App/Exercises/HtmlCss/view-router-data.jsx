import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';

import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';

import { TextFundamentsMetaData } from './TextFundaments/router-data';

import { GoogleFontsMetaData } from './GoogleFonts/router-data';

import { GoogleFonts } from './GoogleFonts/GoogleFonts';

import { BoxModelMetaData } from './Exercise-Box model/router-data';

import { CssBoxModel } from './Exercise-Box model/CssBoxModel';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  GoogleFonts,
  CssBoxModel,
  BoxModelMetaData,
  CssBoxModel,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
