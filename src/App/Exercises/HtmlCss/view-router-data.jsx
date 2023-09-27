import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataSelectors } from './Selectors/router-data';
import { blockRouterMetaData as blockRouterMetaDateText } from './Text/router-data';
import { blockRouterMetaData as blockRouterMetaDateAnimations } from './Animations/router-data';

export const blockRouterMetaData = [
    blockRouterMetaData121220231, 
    blockRouterMetaDataSelectors, 
    blockRouterMetaDateText, 
    blockRouterMetaDateAnimations
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
