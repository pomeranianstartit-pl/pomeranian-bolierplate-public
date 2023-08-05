import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as selectorAndCascade } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as textFundamentals } from './Text-fundamentals/router-data';
import { blockRouterMetaData as googleFonts } from './Google-fonts/router-data';
import { blockRouterMetaData as colors } from './Colors/router-data';
import { blockRouterMetaData as cssFilter } from './CssFilter/router-data';
import { blockRouterMetaData as imageFiles } from './ImageFiles/router-data';
import { blockRouterMetaData as backgrounds } from './Backgrounds/router-data';
import { blockRouterMetaData as boxModel } from './BoxModel/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  selectorAndCascade,
  textFundamentals,
  googleFonts,
  colors,
  cssFilter,
  imageFiles,
  backgrounds,
  boxModel,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
