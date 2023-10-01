import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';

// import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { CssAnimationsMetaData } from './CssAnimations/router-data';
import { CssColorsMetaData } from './CssColors/router-data';
import { ImageFilesMetaData } from './ImageFiles/router-data';
import { CssFilterMetaData } from './CssFilter/router-data';
import { MediaFilesMetaData } from './MediaFiles/router-data';
import { BoxModelMetaData } from './BoxModel/router-data';
import { HTMLTablesMetaData } from './HTMLTables/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  CssAnimationsMetaData,
  CssColorsMetaData,
  ImageFilesMetaData,
  CssFilterMetaData,
  MediaFilesMetaData,
  BoxModelMetaData,
  HTMLTablesMetaData,
  // SelectorsAndCascadeMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
