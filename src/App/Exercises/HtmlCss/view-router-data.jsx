import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as cssColorsMetaData } from './Colors/router-data';
import { blockRouterMetaData as ImageFilesMetaData } from './ImageFiles/router-data';
import { blockRouterMetaData as BackgroundsMetaData } from './Backgrounds/router-data';



export const blockRouterMetaData = [blockRouterMetaData121220231,
    cssColorsMetaData,
    ImageFilesMetaData,
    BackgroundsMetaData,];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
