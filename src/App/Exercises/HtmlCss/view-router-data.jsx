import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataTextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as blockRouterMetaDataStandardTags } from './StandardTags/router-data';
import { blockRouterMetaData as blockRouterMetaDataGoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as blockRouterMetaDataCssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as blockRouterMetaDataColors } from './Colors/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataTextFundaments,
  blockRouterMetaDataStandardTags,
  blockRouterMetaDataGoogleFonts,
  blockRouterMetaDataCssAnimations,
  blockRouterMetaDataColors,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
