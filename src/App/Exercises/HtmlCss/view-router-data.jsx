import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as TextFundamentals } from './TextFundamentals/router-data';
import { blockRouterMetaData as SelectorsAndCascade } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as GoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as Colors } from './Colors/router-data';
import { blockRouterMetaData as ImageFiles } from './ImageFiles/router-data';
import { blockRouterMetaData as Backgrounds } from './Backgrounds/router-data';
import { blockRouterMetaData as CssFilter } from './CssFilter/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  TextFundamentals,
  SelectorsAndCascade,
  GoogleFonts,
  Colors,
  ImageFiles,
  Backgrounds,
  CssFilter,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
