import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataTextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as blockRouterMetaDataStandardTags } from './StandardTags/router-data';
import { blockRouterMetaData as blockRouterMetaDataGoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as blockRouterMetaDataCssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as blockRouterMetaDataColors } from './Colors/router-data';
import { blockRouterMetaData as blockRouterMetaImageFiles } from './ImageFiles/router-data';
import { blockRouterMetaData as blockRouterMetaBackgrounds } from './Backgrounds/router-data';
import { blockRouterMetaData as blockRouterMetaCssFilter } from './CssFilter/router-data';
import { blockRouterMetaData as blockRouterMetaMediaFiles } from './MediaFiles/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataTextFundaments,
  blockRouterMetaDataStandardTags,
  blockRouterMetaDataGoogleFonts,
  blockRouterMetaDataCssAnimations,
  blockRouterMetaDataColors,
  blockRouterMetaImageFiles,
  blockRouterMetaBackgrounds,
  blockRouterMetaCssFilter,
  blockRouterMetaMediaFiles,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
