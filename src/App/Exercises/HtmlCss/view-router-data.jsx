import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as block } from './Exercise-example-12-12-2023-1 /router-data-';

import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';

import { GoogleFontsMetaData } from './GoogleFonts/router-data';
// import { FloatsMetaData } from './FloatsAndPositioning/router-data';

import { FigmaFloatDesignMetaData } from './FloatsAndPositioning/router-data';

import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { blockRouterMetaData as blockRouterMetaDataCssBoxModel } from './Exercise-Box-model/router-data';
import { TablesMetaData } from './Tables/router-data';
export const blockRouterMetaData = [
  block,
  SelectorsAndCascadeMetaData,
  GoogleFontsMetaData,
  // FloatsMetaData,
  FigmaFloatDesignMetaData,
  TextFundamentsMetaData,
  blockRouterMetaDataCssBoxModel,
  TablesMetaData,
  
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
