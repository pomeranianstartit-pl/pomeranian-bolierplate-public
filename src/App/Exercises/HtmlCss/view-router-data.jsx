import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { SelectorsAndCascadeMetaData as SelectorsAndCascade } from './SelectorsAndCascade/router-data';
import { googleFontsMetaData as GoogleFonts } from './GoogleFonts/router-data';
import { standardTagsMetaData as StandardTags } from './StandardTags/router-data';
import { textFundamentsMetaData as TextFundaments } from './TextFundaments/router-data';
import { CssAnimationsMetaData as CssAnimations } from './CssAnimations/router-data';
import { ColorsMetaData as Colors } from './Colors/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231, GoogleFonts, Colors, SelectorsAndCascade, StandardTags, TextFundaments, CssAnimations];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
