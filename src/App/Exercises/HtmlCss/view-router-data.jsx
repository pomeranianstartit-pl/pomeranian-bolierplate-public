import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataTables } from './Tables/router-data';
import { blockRouterMetaData as blockRouterMetaDataTableTennis } from './TableTennis/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataTables,
  blockRouterMetaDataTableTennis,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
