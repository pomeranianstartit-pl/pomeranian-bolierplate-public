import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { ArrayRenderToTableMetaData } from './ArrayRenderToTable/router-data';
import { BoxModelMetaData } from './BoxModel/router-data';
import { ColorsMetaData } from './Colors/router-data';
import { CssAnimationsMetaData } from './CssAnimations/router-data';
import { CssFilterMetaData } from './CssFilter/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { FloatsAndPositioningMetaData } from './FloatsAndPositioning/router-data';

import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { HTMLTablesMetaData } from './HTMLTables/router-data';
import { ImageFilesMetaData } from './ImageFiles/router-data';
import { MediaFilesRouterMetaData } from './MediaFiles/router-data';

import { TextFundamentsMetaData } from './TextFundaments/router-data';
// import { SelectorAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  // SelectorAndCascadeRouterMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  CssAnimationsMetaData,
  ColorsMetaData,
  ImageFilesMetaData,
  CssFilterMetaData,
  MediaFilesRouterMetaData,
  BoxModelMetaData,
  HTMLTablesMetaData,
  ArrayRenderToTableMetaData,
  FloatsAndPositioningMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
