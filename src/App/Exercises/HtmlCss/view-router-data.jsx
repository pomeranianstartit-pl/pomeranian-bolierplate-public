import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as selectorAndCascade } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as textFundamentals } from './Text-fundamentals/router-data';
import { blockRouterMetaData as googleFonts } from './Google-fonts/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  selectorAndCascade,
  textFundamentals,
  googleFonts,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
