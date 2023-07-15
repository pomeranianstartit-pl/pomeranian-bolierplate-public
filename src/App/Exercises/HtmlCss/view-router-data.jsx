import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as Selectors } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as TextFundaments } from './TextFundaments/router-data';

export const blockRouterMetaData = [
    blockRouterMetaData121220231,
    Selectors,
    TextFundaments,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
