import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as colorsMetaData } from './Colors/router-data';
import { blockRouterMetaData as imageFilesMetaData } from './ImageFiles/router-data';
import { blockRouterMetaData as backgroundsMetaData } from './Backgrounds/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231, colorsMetaData, imageFilesMetaData, backgroundsMetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
