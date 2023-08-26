import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as CSSCascadesBlockRouterMetaData } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as TextFundamentsMetaData } from './TextFundaments/router-data';
import { blockRouterMetaData as StandardTagsMetaData } from './StandardTags/router-data';
import { blockRouterMetaData as GoogleFontsMetaData } from './GoogleFonts/router-data';
import { blockRouterMetaData as CSSAnimationMetaData } from './CssAnimation/router-data';
import { blockRouterMetaData as CSSColorsMetaData } from './Colors/router-data';
import { blockRouterMetaData as ImageFilesMetaData } from './ImageFiles/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  CSSCascadesBlockRouterMetaData,
  TextFundamentsMetaData,
  StandardTagsMetaData,
  GoogleFontsMetaData,
  CSSAnimationMetaData,
  CSSColorsMetaData,
  ImageFilesMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
