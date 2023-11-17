import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataCv } from './Cv/router-data';

export const blockRouterMetaData = [blockRouterMetaDataCv];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
