import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockSelectorsAndCascade as selectorsAndCascade } from './SelectorsAndCascade/router-data';
import { blockTextFundamentals } from './TextFundamentals/router-data';
import { blockGoogleFonts } from './GoogleFonts/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231, selectorsAndCascade,blockTextFundamentals,blockGoogleFonts];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
