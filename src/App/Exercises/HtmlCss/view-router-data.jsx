import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
// import { SelectorsAndCascadeRouterMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { CssAnimationsRouterMetaData } from './CssAnimations/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { ImageFilesRouterMetaData } from './ImageFiles/router-data';
import { CssFilterRouterMetaData } from './CssFilter/router-data';
import { MediaFilesRouterMetaData } from './MediaFiles/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  // SelectorsAndCascadeRouterMetaData,
  TextFundamentsMetaData,
  GoogleFontsMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
  ImageFilesRouterMetaData,
  CssFilterRouterMetaData,
  MediaFilesRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
