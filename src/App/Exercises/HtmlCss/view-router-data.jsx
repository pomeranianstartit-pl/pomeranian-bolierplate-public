import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { TextFundamentalsMetaData as TextFundamentals } from './Text-fundamentals/router-data';
import { ColorsMetaData } from './Color/router-data';
import { ImageFilesMetaData } from './ImageFiles/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  TextFundamentals,
  ColorsMetaData,
  ImageFilesMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
