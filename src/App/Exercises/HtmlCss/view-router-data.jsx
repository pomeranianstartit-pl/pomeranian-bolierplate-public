import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { htmlCssRouterMetaData } from './SelectorsAndCascade/router-data';
import { textFundamentsRouterMetaData } from './TextFundaments/router-data';
import { standardTagsRouterMetaData } from './StandardTags/router-data';
import { cssAnimationsRouterMetaData } from './CssAnimations/router-data';
import { colorsRouterMetaData } from './Colors/router-data';
import { imageFilesRouterMetaData } from './ImageFiles/router-data';
import { backgroundsRouterMetaData } from './Backgrounds/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  htmlCssRouterMetaData,
  textFundamentsRouterMetaData,
  standardTagsRouterMetaData,
  cssAnimationsRouterMetaData,
  colorsRouterMetaData,
  imageFilesRouterMetaData,
  backgroundsRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
