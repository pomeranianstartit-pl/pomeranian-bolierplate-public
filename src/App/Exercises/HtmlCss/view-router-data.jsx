import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as Selectors } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as TextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as StandardTags } from './StandardTags/router-data';
import { blockRouterMetaData as GoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as CssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as CssColors } from './CssColors/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  Selectors,
  TextFundaments,
  StandardTags,
  GoogleFonts,
  CssAnimations,
  CssColors,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
