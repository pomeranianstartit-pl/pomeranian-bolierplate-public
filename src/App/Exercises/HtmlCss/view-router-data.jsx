import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as BlockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
// import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsRouterMetaData } from './TextFundaments/router-data';
import { GoogleFontsRouterMetaData } from './GoogleFonts/router-data';
import { CssAnimationsRouterMetaData } from './CssAnimations/router-data';
import { ColorsRouterMetaData } from './Colors/router-data';
import { ImagesFilesRouterMetaData } from './ImagesFiles/router-data';
import { CSSFilterRouterMetaData } from './CssFilter/router-data';
import { MediaFilesRouterMetaData } from './MediaFiles/router-data';

export const blockRouterMetaData = [
  BlockRouterMetaData121220231,
  // SelectorsAndCascadeMetaData,
  TextFundamentsRouterMetaData,
  GoogleFontsRouterMetaData,
  CssAnimationsRouterMetaData,
  ColorsRouterMetaData,
  ImagesFilesRouterMetaData,
  CSSFilterRouterMetaData,
  MediaFilesRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
