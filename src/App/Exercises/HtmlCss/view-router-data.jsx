import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockSelectorsAndCascade as selectorsAndCascade } from './SelectorsAndCascade/router-data';
import { blockTextFundamentals } from './TextFundamentals/router-data';

export const blockRouterMetaData = [blockRouterMetaData121220231, selectorsAndCascade,blockTextFundamentals];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
